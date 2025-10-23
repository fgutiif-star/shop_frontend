import axios from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../const";
import {
    token_availability,
} from "@/6_shared";
import { message } from "antd";

export const isDevelopment = import.meta.env.VITE_APP_ENV === "development";

export const apiBaseUrl = isDevelopment
    ? import.meta.env.VITE_APP_API_URL
    : `${window.location.origin}`;

const $api = axios.create({
    baseURL: apiBaseUrl,
});

$api.interceptors.request.use((config: any) => {
    if (token_availability()) {
        config.headers.Authorization = `Bearer ${token_availability()}`
    }
    return config;
});

// const clearLocalStorage = () => {
//     localStorage.removeItem(ACCESS_TOKEN_KEY);
//     localStorage.removeItem(REFRESH_TOKEN_KEY);
//     window.location.replace("/");
//     window.location.reload();
// };

const refreshAccessToken = async () => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/token/refresh`, {
            refresh: localStorage.getItem(REFRESH_TOKEN_KEY),
        });
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);
        return response.data;
    } catch (error) {
        console.log(error)
        // clearLocalStorage()
    }
};

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
            console.log('originalRequest', originalRequest)
            originalRequest._retry = true; // Помечаем, что мы уже пытались повторить запрос
            const newAccessToken = await refreshAccessToken(); // Получаем новый access токен

            axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`; // Обновляем токен в заголовках
            originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`; // Обновляем токен в текущем запросе

            return $api(originalRequest); // Повторяем запрос с новым токеном
        }

        message.error(error.message);

        return Promise.reject(error); // Передаем ошибку дальше, если условия не совпадают
    }
);

export default $api;
