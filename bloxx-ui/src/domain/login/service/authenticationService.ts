import {Email, ObjectKey, Password, User} from "common/types/commonTypes";
import objectKeys from "app/state/objectKeys";

const authenticate = (email: Email, password: Password,  users: User[]= []): ObjectKey | null => {
    // todo - fetch users and check password
    return objectKeys.user.jack
}

export default {
    authenticate
}