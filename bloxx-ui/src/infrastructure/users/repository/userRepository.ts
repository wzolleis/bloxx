import {ObjectKey, User} from "common/types/commonTypes";

const unknownUser: User = {
    key: 'unknown',
    name: 'unknown'
}

const retrieve = (users: User[], key: ObjectKey, unknown = unknownUser) => {
    return users.find((it) => it.key === key) || unknown
}

export default {
    retrieve
}