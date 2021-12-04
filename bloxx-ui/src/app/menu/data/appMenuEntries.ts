import {AppMenuEntry} from "app/menu/components/MenuItemView";

export const menuItems: AppMenuEntry[] = [
    {
        path: '/welcome',
        title: 'Übersicht',
        key: 'welcome',
        iconType: "Welcome"
    },
    {
        path: '/posts',
        title: 'Posts',
        key: 'posts',
        iconType: "Post"
    },
    {
        path: '/users',
        title: 'User',
        key: 'user',
        iconType: "Player"
    },
    {
        path: '/favorites',
        title: 'Favoriten',
        key: 'favorites',
        iconType: "Favorites"
    },
]