import React from "react";
import {useRoutes} from "react-router-dom";
import {RouteObject} from "react-router";
import Layout from "app/components/Layout";
import WelcomeView from "common/components/WelcomeView";
import BloxxView from "domain/bloxx/components/BloxxView";
import SignInView from "domain/login/components/SignInView";

export const NotFoundView = () => {
    return (
        <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
        </main>
    )
}

export const AppLinks = {
    root: '/',
    signin: 'signin',
    welcome: 'welcome',
    bloxx: 'bloxx'
}

const nestedPaths: RouteObject[] = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: AppLinks.signin,
                element: <SignInView/>,
                index: true
            },
            {
                path: AppLinks.welcome,
                element: <WelcomeView/>,
            },
            {
                path: AppLinks.bloxx,
                element: <BloxxView/>
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundView/>
    }
]


export const AppRoutes = () => {
    return useRoutes(nestedPaths);
}