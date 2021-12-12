import {Email, ObjectKey, Password} from "common/types/commonTypes";
import objectKeys from "app/state/objectKeys";



const authenticate = async ({email, password}: {email: Email, password: Password}): Promise<ObjectKey> => {
    // todo - fetch users and check password
    return Promise.resolve(objectKeys.user.jack)
}

const authenticationService = {
    authenticate
}

export default authenticationService