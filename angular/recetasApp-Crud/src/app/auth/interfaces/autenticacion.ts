export interface LoginRequest {
    accessToken: string | null
    email: string,
    password: string
}


export interface LoginResponse {
    accessToken: string,
    user: {
        email: string,
        id: number
    }
}
