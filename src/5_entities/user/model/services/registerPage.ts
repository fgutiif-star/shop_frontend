import { type AxiosResponse } from "axios";
import type { RegisterRequestProps, RegisterData } from "../types";
import { api } from "@/6_shared";

export async function registerRequest(props: RegisterRequestProps): Promise<AxiosResponse<RegisterData>> {
    try {
        return await api.post("/user/", props);
    } catch (error: any) {
        console.error("Ошибка при регистрации", error);
        throw error;
    }
}
