import type {AxiosResponse} from "axios";
import {FetchUserProps, LoginData,} from "@/5_entities/user";
import {api} from "@/6_shared";


export async function fetchUser(props: FetchUserProps): Promise<AxiosResponse<LoginData>> {
    const { page, per_page } = props;

    try {
        return await api.get(
            `/user/?page=${page}&per_page=${per_page}`,
        );
    } catch (error: any) {
        console.log("refresh token:", error);
    }
}