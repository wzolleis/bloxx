import React from 'react'
import {useAppSelector} from "app/state/hooks";
import {selectLoginState} from "domain/login/state/loginSlice";
import {useNavigate} from "react-router-dom";
import {selectUserState} from "domain/user/state/userSlice";
import userRepository from "infrastructure/users/repository/userRepository";

const WelcomeView = () => {
    const {credentials} = useAppSelector(selectLoginState)
    const {users} = useAppSelector(selectUserState)


    const user = userRepository.retrieve(users, credentials.user!)

    return (
        <div>Welcome {user.name}</div>
    )
}

export default WelcomeView