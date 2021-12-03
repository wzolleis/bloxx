import authenticationService from "domain/login/service/authenticationService";
import {userLogin} from 'domain/login/state/loginSlice'
import {Email, Password} from "common/types/commonTypes";

export const login = (email: Email, password: Password) => {
    const user = authenticationService.authenticate(email, password)
    if (user) {
        userLogin({user})
    }
}