import React, { useRef } from "react";
import { Input, Space, Select, Spin } from "antd";
import type { UsersResponse } from "@/5_entities/user/model/types";
import { useRequest } from "@/6_shared/lib";
import { fetchUser } from "@/5_entities/user";
import type { FetchUserProps } from "@/5_entities/user/model/services/fetchUser";

const { Search } = Input;

const UserListFilter: React.FC = () => {
    const { request, isLoading, response } = useRequest<FetchUserProps, UsersResponse>();

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const searchRef = useRef(""); // текущий текст поиска
    const roleRef = useRef<string | undefined>(undefined); // выбранная роль

    const loadUsers = () => {
        request(
            { username: searchRef.current || undefined, role: roleRef.current, page: 1, per_page: 50 },
            fetchUser
        );
    };

    const handleSearch = (value: string) => {
        searchRef.current = value;

        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            loadUsers();
        }, 500);
    };

    const handleRoleChange = (value?: string) => {
        roleRef.current = value;
        loadUsers();
    };

    return (
        <div>
            <Space direction="vertical" style={{ marginBottom: 16 }}>
                <Search
                    placeholder="Поиск по username"
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{ width: 300 }}
                    allowClear
                />

                <Select
                    placeholder="Фильтр по роли"
                    allowClear
                    style={{ width: 200 }}
                    onChange={handleRoleChange}
                    options={[
                        { label: "Admin", value: "admin" },
                        { label: "Seller", value: "seller" },
                        { label: "Buyer", value: "buyer" },
                    ]}
                />
            </Space>

            {isLoading && <Spin style={{ marginBottom: 10 }} />}

            <ul>
                {response?.items?.map((u) => (
                    <li key={u.id}>
                        {u.username} — {u.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserListFilter;
