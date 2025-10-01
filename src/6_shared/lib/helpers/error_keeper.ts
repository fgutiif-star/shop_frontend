import {type IMessage, MessageStatus} from "@/6_shared";

export function ErrorKeeper(
    e: any,
    addMessage: (message: Omit<IMessage, "id">) => void
) {
    const ERROR_MESSAGES = {
        NETWORK_ERROR: {
            status: MessageStatus.ERROR,
            title: "Ошибка сети!",
            label: "Проверьте подключение.",
        },
        400: {
            status: MessageStatus.WARNING,
            title: "Ошибка запроса!",
            label: "Неправильный запрос.",
        },
        401: {
            status: MessageStatus.WARNING,
            title: "Не авторизован!",
            label: "Пожалуйста, войдите в систему.",
        },
        403: {
            status: MessageStatus.ERROR,
            title: "Доступ запрещен!",
            label: e.response.data.message,
        },
        404: {
            status: MessageStatus.INFO,
            title: "Ошибка 404!",
            label: "Страница не найдена.",
        },
        409: {
            status: MessageStatus.WARNING,
            title: "Конфликт данных!",
            label: e.response.data.message,
        },
        500: {
            status: MessageStatus.ERROR,
            title: "Серверная ошибка!",
            label: "Что-то пошло не так.",
        },
        DEFAULT: {
            status: MessageStatus.INFO,
            title: "Неизвестная ошибка!",
            label: "Обратитесь к администратору.",
        },
    };

    if (e.message === "Network Error") {
        addMessage(ERROR_MESSAGES.NETWORK_ERROR);
        return;
    }

    const status = e.response?.status as keyof typeof ERROR_MESSAGES;
    const message = ERROR_MESSAGES[status] || ERROR_MESSAGES.DEFAULT;

    addMessage(message);
}
