import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";
import {AccountBox, DeviceUnknown, Favorite, LocationCity, Workspaces} from "@mui/icons-material";

export type IconType = 'Bloxx' | "Player" | "Favorites" | "Welcome"

export const getIcon = (icon: IconType | undefined): React.ReactElement => {
    const color = 'secondary'
    switch (icon) {
        case "Bloxx":
            return <InboxIcon color={color}/>
        case "Player":
            return <AccountBox color={color}/>
        case "Welcome":
            return <Workspaces color={color}/>
        case "Favorites":
            return <Favorite color={color}/>
        default:
            return <DeviceUnknown color={color}/>
    }
}