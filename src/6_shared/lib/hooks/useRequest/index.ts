import {useState} from "react";
import type {AxiosResponse} from "axios";
import axios from "axios";
import {addMessage, ErrorKeeper} from "@/6_shared";

/**
 * Хук для выполнения асинхронных запросов с обработкой ошибок и опциональными уведомлениями.
 *
 * @template T - Тип параметров для вызываемой функции.
 * @template P - Тип данных, который возвращает функция.
 * @returns {{
 *   response: P | null,
 *   error: string | null,
 *   isLoading: boolean,
 *   request: (params: T, requestService: (params: T) => Promise<any>) => Promise<any>,
 *   status: number | undefined
 * }} Объект с данными о состоянии запроса и функцией выполнения запроса.
 */
export const useRequest = <T = undefined, P = undefined>() => {
    const [response, setResponse] = useState<P | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);
    const [status, setStatus] = useState<number | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const request = async (
        params: T,
        requestService: (params: T) => Promise<AxiosResponse<P> | undefined>,
        callback?: (...args: any[]) => void
    ) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await requestService(params);
            setResponse(res?.data);
            setStatus(res?.status);
            setError(null);

            if (callback) {
                callback(res?.data);
            }

            return res;
        } catch (err) {
            ErrorKeeper(err, addMessage)
            if (axios.isAxiosError(err)) {
                const errorMessage =
                    err.response?.data?.message || "Произошла ошибка";
                setError(errorMessage);
                setStatus(err.response?.status);
            } else {
                setError("Непредвиденная ошибка");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { response, error, isLoading, request, status };
};
