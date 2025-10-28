import React, { useEffect, useState } from "react";
import { fetchUser } from "@/5_entities/user";
import type { FetchUserProps, UsersResponse, UserData } from "@/5_entities/user/model/types";
import { useRequest } from "@/6_shared/lib";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import UserListFilter from "@/4_features/UserListFilter/UserListFilter.tsx";

const UserListPage = () => {
    const [role, setRole] = useState<"admin" | "seller" | "buyer" | null>(null);
    const [username, setUsername] = useState("");
    const [page, setPage] = useState<number>(1);
    const [isActive, setIsActive] = useState<boolean | null>(null);
    const [perPage, setPerPage] = useState<number>(10);

    const { request, isLoading, response } = useRequest<FetchUserProps, UsersResponse>();

    useEffect(() => {
        console.log("fetching users with filter:", { page, perPage, role, username, isActive });
        request(
            { page, per_page: perPage, role, username, is_active: isActive },
            fetchUser
        );
    }, [page, perPage, role, username, isActive]);

    const columns: TableColumnsType<UserData> = [
        { title: "Full Name", dataIndex: "full_name", key: "full_name" },
        { title: "Username", dataIndex: "username", key: "username" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Role", dataIndex: "role", key: "role" },
        {
            title: "Status",
            dataIndex: "is_active",
            key: "is_active",
            render: (is_active: boolean) =>
                is_active ? (
                    <span style={{ color: "green", fontWeight: 600 }}>Активен</span>
                ) : (
                    <span style={{ color: "red", fontWeight: 600 }}>Неактивен</span>
                ),
        },
    ];

    return (
        <div>
            <h1
                style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#000",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                Список пользователей
            </h1>

            <UserListFilter
                role={role}
                setRole={setRole}
                username={username}
                setUsername={setUsername}
                isActive={isActive}
                setIsActive={setIsActive}
                isLoading={isLoading}
            />

            <Table<UserData>
                columns={columns}
                dataSource={response?.items || []}
                rowKey="id"
                loading={isLoading}
                pagination={{
                    current: page,
                    pageSize: perPage,
                    total: response?.total ?? undefined,
                    onChange: (page: number) => setPage(page),
                    showSizeChanger: false,
                }}
            />
        </div>
    );
};

export default UserListPage;
