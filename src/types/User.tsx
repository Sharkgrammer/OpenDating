export interface User {
    uid: string,
    display_name: string,
    description: string,
    last_login: string,
    images: string[],

    // Extra profile data
    email?: string,
    full_name?: string,
    date_joined?: string
}

export const UserDefault = {
    uid: "",
    display_name: "",
    description: "",
    last_login: "",
    images: []
}