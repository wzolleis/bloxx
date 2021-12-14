import React from 'react'
import {useAppSelector} from "app/state/hooks";
import {selectLoginState} from "domain/login/state/loginSlice";
import {useGetUserByKeyQuery} from "domain/user/api/userApi";
import {messages} from "common/i18n/messages";

const WelcomeView = () => {
    const {user: userKey} = useAppSelector(selectLoginState)
    const {data} = useGetUserByKeyQuery(userKey || "")
    let user = null
    if (data?.length === 1) user = data[0]
    const userName = user?.name || messages.common.noUser

    return (
        <div>Welcome {userName}</div>
    )
}

export default WelcomeView