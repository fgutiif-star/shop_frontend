import type {AxiosResponse} from "axios";
import type {FetchUserProps} from "@/5_entities/user";
import {api} from "@/6_shared";
import type {UsersResponse} from "@/5_entities/user/model/types";


export async function fetchUser(props: FetchUserProps): Promise<AxiosResponse<UsersResponse>> {
    const { page, per_page } = props;

    try {
        return await api.get(
            `/user/?page=${page}&per_page=${per_page}`,
        );
    } catch (error: any) {
        console.log("refresh token:", error);
    }
}