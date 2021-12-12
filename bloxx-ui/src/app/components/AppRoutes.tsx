import React from "react";
import {useRoutes} from "react-router-dom";
import {RouteObject} from "react-router";
import Layout from "app/components/Layout";
import WelcomeView from "common/components/WelcomeView";
import PostsView from "domain/post/components/PostsView";
import SignInView from "domain/login/components/SignInView";
import {UsersView} from "domain/user/components/UsersView";
import {NotFoundView} from "app/components/NotFoundView";


export const AppLinks = {
    root: '/',
    signin: 'signin',
    welcome: 'welcome',
    posts: 'posts',
    users: 'users'
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
                path: AppLinks.posts,
                element: <PostsView/>
            },
            {
                path: AppLinks.users,
                element: <UsersView/>
            }
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