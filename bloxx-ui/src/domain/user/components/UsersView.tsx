import React from "react";
import {useGetUsersQuery} from "domain/user/api/userApi";

export const UsersView = () => {
    // , error, isLoading}
    const {data} = useGetUsersQuery()
    console.log('users:', JSON.stringify(data))
    return (
        <div>User!!</div>
    )
}