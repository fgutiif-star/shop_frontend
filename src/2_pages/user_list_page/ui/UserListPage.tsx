import React, { useEffect, useState } from 'react';
import {fetchUser} from '@/5_entities/user';
import type { FetchUserProps, UsersResponse, UserData } from '@/5_entities/user/model/types';
import {useRequest} from "@/6_shared/lib";
import { Table, Pagination } from 'antd';
import type { TableColumnsType } from 'antd';
import UserListFilter from "@/4_features/UserListFilter/UserListFilter.tsx";


const UserListPage = () => {
    const [page, setPage] = useState<number>(1)
    const [perPage, setPerPage] = useState<number>(10)

    const {
        request,
        isLoading,
        error,
        response,
        status,
    } = useRequest<FetchUserProps, UsersResponse>()

    useEffect(() => {
        request({ page, per_page: perPage }, fetchUser,);
    }, [page, perPage]);

    if (isLoading) return <div>Загрузка пользователей...</div>;

    console.log(response)

    const columns: TableColumnsType<UserData> = [
        {
            title: "Full Name",
            dataIndex: "full_name",
            key: "full_name",

        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",

        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            filters: [
                { text: "Admin", value: "admin" },
                { text: "Seller", value: "seller" },
                { text: "Buyer", value: "buyer" },
            ],
            onFilter: (value, record) => record.role === value,
        },
    ];

    return (
        <div>
            <h1 style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#000",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px"
            }}>Список пользователей</h1>
            <UserListFilter />
            <Table<UserData>
                columns={columns}
                dataSource={response?.items || []}
                rowKey="id"
                loading={isLoading}
                pagination={{
                    current: page,
                    pageSize: perPage,
                    total: response?.total ?? undefined,
                    onChange: (page: number, pageSize?: number) => setPage(page),
                    showSizeChanger: false,
                }}
            />


        </div>
    );
};

export default UserListPage;
