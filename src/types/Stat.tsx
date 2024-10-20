export interface Stat {
    likes: number,
    dislikes: number,
    days_on: number,
    top_interests: TopInterest[]
}

interface TopInterest {
    title: string,
    count: number
}

export const StatDefault = {
    likes: 0,
    dislikes: 0,
    days_on: 0,
    top_interests: []
}
