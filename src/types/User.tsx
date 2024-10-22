import {InterestCategory} from "./InterestCategory.tsx";

export interface User {
    uid: string,
    display_name: string,
    description: string,
    last_login: string,
    images: string[],
    interests: InterestCategory[],

    // Extra profile data
    email?: string,
    full_name?: string,
    date_joined?: string

    // Feed Data
    rating?: string,
    age?: string,
}

export const UserDefault = {
    uid: "",
    display_name: "",
    description: "",
    last_login: "",
    images: [],
    interests: []
}