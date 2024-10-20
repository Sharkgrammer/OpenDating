export interface LikeCombined {
    likes: Like[],
    messages: Like[]
}

export interface Like {
    uid: string,
    display_name: string,
    prof_image: string,
    last_message?: string
}

export const LikeCombinedDefault =
    {
        likes: [],
        messages: []
    }

export const LikeDefault =
    {
        uid: "",
        display_name: "",
        prof_image: "",
        last_message: ""
    }