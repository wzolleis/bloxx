import React from 'react'
import {useAppSelector} from "app/state/hooks";
import {selectLoginState} from "domain/login/state/loginSlice";
import {useGetUserByKeyQuery} from "domain/user/api/userApi";

const WelcomeView = () => {
    const {user: userKey} = useAppSelector(selectLoginState)
    const {data} = useGetUserByKeyQuery(userKey || "")
    let user = null
    if (data?.length === 1) user = data[0]
    const userName = user?.name || "unbekannter user"

    return (
        <div>Welcome {userName}</div>
    )
}

export default WelcomeView