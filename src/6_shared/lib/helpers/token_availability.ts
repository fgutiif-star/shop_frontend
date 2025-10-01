import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../const";

export function token_availability() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function refreshTokenAvailability() {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
}


