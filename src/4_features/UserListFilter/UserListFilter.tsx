import React, { useEffect, useRef, useState } from "react";
import { Input, Space, Select } from "antd";

interface UserListFilterProps {
    role: "admin" | "seller" | "buyer" | null;
    setRole: (value: "admin" | "seller" | "buyer" | null) => void;
    username: string;
    setUsername: (value: string) => void;
    isActive: boolean | null;
    setIsActive: (value: boolean | null) => void;
    isLoading: boolean;
}

const UserListFilter: React.FC<UserListFilterProps> = ({role, setRole, username, setUsername, isActive, setIsActive, isLoading,}) => {
    const [searchValue, setSearchValue] = useState(username);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // debounce для поля поиска
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setUsername(searchValue.trim());
        }, 500);

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [searchValue]);

    const handleRoleChange = (value: "admin" | "seller" | "buyer" | null) => {
        setRole(value);
    };

    const handleActiveChange = (value: string | null) => {
        if (value === "true") setIsActive(true);
        else if (value === "false") setIsActive(false);
        else setIsActive(null);
    };

    return (
        <div>
            <Space direction="vertical" style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Поиск пользователей"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{ width: 300 }}
                    allowClear
                    disabled={isLoading}
                />

                <Select
                    placeholder="Фильтр по роли"
                    allowClear
                    style={{ width: 200 }}
                    onChange={handleRoleChange}
                    value={role ?? undefined}
                    options={[
                        { label: "Админ", value: "admin" },
                        { label: "Продавец", value: "seller" },
                        { label: "Покупатель", value: "buyer" },
                    ]}
                    disabled={isLoading}
                />

                <Select
                    placeholder="Фильтр по активности"
                    allowClear
                    style={{ width: 200 }}
                    value={
                        isActive === true ? "true" : isActive === false ? "false" : undefined
                    }
                    onChange={handleActiveChange}
                    options={[
                        { label: "Активные", value: "true" },
                        { label: "Неактивные", value: "false" },
                    ]}
                    disabled={isLoading}
                />
            </Space>
        </div>
    );
};

export default UserListFilter;
