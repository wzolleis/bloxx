export type ObjectKey = string


export interface WithKey {
    key: ObjectKey
}

export interface User extends WithKey {
    name: string
}

export interface Bloxx extends WithKey {
    user: ObjectKey
    title: string
    content: string
}

export type Nullable<T> = T | null

export interface AppError {
    reason: string
    code: number
}