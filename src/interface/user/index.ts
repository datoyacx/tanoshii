export interface User {
    username: string;
    avatar: string;
    password: string;
    password_salt: string;
    created_at: number;
    updated_at: number;
}