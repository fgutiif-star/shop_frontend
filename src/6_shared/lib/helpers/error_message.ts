import { notification } from 'antd';
import {IMessage, MessageStatus} from "@/6_shared";

// Функция для добавления уведомлений через Ant Design
export const addMessage = (message: Omit<IMessage, "id">) => {
    const { status, title, label } = message;

    const notificationType =
        status === MessageStatus.ERROR ? 'error' :
            status === MessageStatus.WARNING ? 'warning' :
                status === MessageStatus.INFO ? 'info' : 'success';

    notification[notificationType]({
        message: title,
        description: label,
        duration: status,
    });
};