import { type AxiosResponse } from "axios";
import type {LoginData, LoginRequestProps} from "../types";
import {api} from "@/6_shared";


export async function loginRequest(props: LoginRequestProps): Promise<AxiosResponse<LoginData>> {
    try {
        return await api.post(`/auth/user/sign_in/`, props);
    } catch (error: any) {
        console.log("Ошибка при входе", error);
    }
}


