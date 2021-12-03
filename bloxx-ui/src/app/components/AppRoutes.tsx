import React from "react";
import {useRoutes} from "react-router-dom";
import {RouteObject} from "react-router";
import Layout from "app/components/Layout";
import WelcomeView from "common/components/WelcomeView";
import BloxxView from "domain/bloxx/components/BloxxView";
import SignIn from "domain/login/components/SignIn";

export const NotFoundView = () => {
    return (
        <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
        </main>
    )
}

const nestedPaths: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: 'welcome',
                element: <WelcomeView/>,
            },
            {
                path: "bloxx",
                element: <BloxxView/>
            },
        ],
    },
    {
        path: 'signin',
        element: <SignIn/>
    },
    {
        path: "*",
        element: <NotFoundView/>
    }
]


export const AppRoutes = () => {
    return useRoutes(nestedPaths);
}