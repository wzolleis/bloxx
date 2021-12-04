import {Email, Nullable, ObjectKey, User} from "common/types/commonTypes";

const retrieve = (key: ObjectKey, users: User[]= []): Nullable<User> => {
    return users.find((it) => it.key === key) || null
}

const findByMail = (email: Email,  users: User[]= []): Nullable<User> => {
    return users.find((it) => it.mail === email) || null
}

const userRepository = {
    retrieve,
    findByMail
}

export default userRepository