import React from "react";
import {useGetUsersQuery} from "domain/user/api/userApi";

export const UsersView = () => {
    // , error, isLoading}
    const {data} = useGetUsersQuery()
    return (
        <div>{JSON.stringify(data)}</div>
    )
}