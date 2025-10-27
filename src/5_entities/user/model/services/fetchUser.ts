import { api } from "@/6_shared";
import type { UsersResponse } from "@/5_entities/user/model/types";

export interface FetchUserProps {
    page?: number;
    per_page?: number;
    username?: string;
    role?: string;
}

export async function fetchUser(
    props: FetchUserProps
) {
    const { page = 1, per_page = 10, username, role } = props;

    const params = new URLSearchParams();
    params.append("page", String(page));
    params.append("per_page", String(per_page));
    if (username) params.append("username", username);
    if (role) params.append("role", role);

    return api.get<UsersResponse>(`/user/?${params.toString()}`);
}
