import { type AxiosResponse } from "axios";
import type {LoginData, MeData} from "../types";
import {api, apiBaseUrl, refreshTokenAvailability} from "@/6_shared";
import {UserStore} from "@/5_entities/user";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "@/6_shared/const";

export async function fetchRefreshToken(): Promise<AxiosResponse<LoginData>> {
    const { setIsAuth, initAuthData, setMeData } = UserStore;

    try {
        const response = await api.post(
            `${apiBaseUrl}/auth/token/refresh/`,
            {refresh: refreshTokenAvailability()}
        );
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
        setIsAuth(true);

        const userMe = await api.get<MeData>('/auth/user/me/')
        setMeData(userMe.data)
        return response.data;
    } catch (error: any) {
        console.log("refresh token:", error);
    } finally {
        initAuthData();
    }
}
