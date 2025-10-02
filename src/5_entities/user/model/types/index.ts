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