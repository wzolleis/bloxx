import React from 'react'
import {useAppSelector} from "app/state/hooks";
import {selectLoginState} from "domain/login/state/loginSlice";
import userRepository from "infrastructure/users/repository/userRepository";

const WelcomeView = () => {
    const {credentials} = useAppSelector(selectLoginState)
    const user = userRepository.retrieve(credentials.user!)
    const name = user?.name || 'unknown'
    return (
        <div>Welcome {name}</div>
    )
}

export default WelcomeView