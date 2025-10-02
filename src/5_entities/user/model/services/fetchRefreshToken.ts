import { type AxiosResponse } from "axios";
import type {LoginData, MeData} from "../types";
import {api, apiBaseUrl} from "@/6_shared";
import {UserStore} from "@/5_entities/user";

export async function fetchRefreshToken(): Promise<AxiosResponse<LoginData>> {
    const { setIsAuth, initAuthData, setMeData } = UserStore;

    try {
        const response = await api.get(
            `${apiBaseUrl}/refresh_token`,
        );
        setIsAuth(true);

        const userMe = await api.get<MeData>('/auth/users/me/')
        setMeData(userMe.data)
        return response.data;
    } catch (error: any) {
        console.log("refresh token:", error);
    } finally {
        initAuthData();
    }
}
