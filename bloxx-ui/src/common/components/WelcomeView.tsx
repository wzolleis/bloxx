import React from 'react'
import {useAppSelector} from "app/state/hooks";
import {selectLoginState} from "domain/login/state/loginSlice";

const WelcomeView = () => {
    const {user} = useAppSelector(selectLoginState)
    return (
        <div>Welcome {user}</div>
    )
}

export default WelcomeView