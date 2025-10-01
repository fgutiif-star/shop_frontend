import {MessageStatus} from "./enums.ts";

export interface IMessage {
    id: number;
    status: MessageStatus;
    title: string;
    label: string;
}

export interface IPageableParams<T> {
    total: number;
    items: Array<T>
}