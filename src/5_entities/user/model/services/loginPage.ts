import { type AxiosResponse } from "axios";
import type {LoginData, LoginRequestProps} from "../types";
import {api} from "@/6_shared";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "@/6_shared/const";


export async function loginRequest(props: LoginRequestProps): Promise<AxiosResponse<LoginData>> {
    try {
        const response = await api.post(`/auth/user/sign_in/`, props);
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
        return response
    } catch (error: any) {
        console.log("Ошибка при входе", error);
    }
}


