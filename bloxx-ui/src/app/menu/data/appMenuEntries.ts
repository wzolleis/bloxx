import {AppMenuEntry} from "app/menu/components/MenuItemView";

export const menuItems: AppMenuEntry[] = [
    {
        path: '/welcome',
        title: 'Übersicht',
        key: 'welcome',
        iconType: "Welcome"
    },
    {
        path: '/bloxx',
        title: 'Bloxx',
        key: 'bloxx',
        iconType: "Bloxx"
    },
    {
        path: '/user',
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