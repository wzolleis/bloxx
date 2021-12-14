export type ObjectKey = string
export type Email = string
export type Password = string

export interface WithKey {
    key: ObjectKey
}

export interface User extends WithKey {
    id: string
    name: string
    mail: Email,
    password: string
}

export interface Post extends WithKey {
    id: string,
    user: ObjectKey
    title: string
    content: string
}

export type Nullable<T> = T | null

export interface AppError {
    reason: string
    code: number
}

export interface ActionHandler {
    handleEdit: () => void
}