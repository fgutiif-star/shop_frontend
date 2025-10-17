import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/5_entities/user/model/services/fetchUser';
import type { FetchUserProps } from '@/5_entities/user/model/types/';

const UserListPage = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await fetchUser({ page: 1, per_page: 10 } as FetchUserProps);
                const dataArray = Array.isArray(response?.data) ? response.data : [response?.data];
                setUsers(dataArray);
            } catch (error) {
                console.error('Ошибка при загрузке пользователей:', error);
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    if (loading) return <div>Загрузка пользователей...</div>;

    return (
        <div>
            <h2>Список пользователей</h2>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        {user.full_name || user.username} — {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserListPage;