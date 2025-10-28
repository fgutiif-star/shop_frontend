import { api } from "@/6_shared";
import type { FetchUserProps, UsersResponse } from "@/5_entities/user/model/types";

export async function fetchUser(props: FetchUserProps) {
    const { page = 1, per_page = 10, username, role, is_active } = props;

    const params = new URLSearchParams();
    params.append("page", String(page));
    params.append("per_page", String(per_page));
    if (username) params.append("username", username);
    if (role) params.append("role", role);
    if (is_active !== null && is_active !== undefined) {
        params.append("is_active", String(is_active));
    }

    return api.get<UsersResponse>(`/user/?${params.toString()}`);
}
