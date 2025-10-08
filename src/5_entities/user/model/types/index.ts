export interface LoginData {
    "refresh": string;
    "access": string;
}

export interface MeData {
    id: number;
    username: string;
    email: string;
    full_name: string;
    role: string;
    is_active: boolean;
    created_at: string;
    modified_at: string;
    blocked_at: string | null;
}

export interface LoginRequestProps {
    password: string;
    username: string;
}

export interface RegisterRequestProps {
    username: string;
    email: string;
    full_name: string;
    password: string;
    password_confirm: string;
    role: "admin" | "seller" | "buyer";
}
export interface RegisterData {
    id: number;
    username: string;
    email: string;
    full_name: string;
    role: string;
    is_active: boolean;
    created_at: string;
    modified_at: string;
    blocked_at: string | null;
}
