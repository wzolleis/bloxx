import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader, Collapse,
    IconButton, Menu, MenuItem,
    Typography
} from "@mui/material";
import {red} from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {ClassNameMap, makeStyles} from "@mui/styles";
import {messages} from "common/i18n/messages";
import {useAppSelector} from "app/state/hooks";
import {Bloxx, Nullable, User} from "common/types/commonTypes";
import userRepository from "infrastructure/users/repository/userRepository";

const styles = {
    parentFlexSplit: {
        display: "flex",
        justifyContent: "space-between"
    },
    rightAlignItem: {
        marginLeft: "auto"
    }
}
type BloxxCardStyles = keyof typeof styles
const useStyles = makeStyles(styles)

export interface BloxxCardProps {
    bloxx: Bloxx
}

interface BloxxCardHeaderProps extends BloxxCardProps {
    user: Nullable<User>
    bloxx: Bloxx
    handleMoreActionsClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface BloxxCardActionsProps extends BloxxCardProps {
    classes: ClassNameMap<BloxxCardStyles>
    handleExpandClick: () => void
    expanded: boolean
}

const BloxxCardActions = ({classes, handleExpandClick, expanded}: BloxxCardActionsProps) => {
    return (
        <CardActions disableSpacing className={classes.parentFlexSplit}>
            <IconButton>
                <FavoriteIcon/>
            </IconButton>
            <IconButton onClick={handleExpandClick} className={classes.rightAlignItem}
            >
                {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </IconButton>
        </CardActions>
    )
}

const BloxxCardContent = ({bloxx: {content}}: BloxxCardProps) => {
    return (
        <CardContent>
            <Typography variant="body2" color="text.secondary">{content}</Typography>
        </CardContent>
    )
}

const BloxxCardHeader = ({bloxx, user, handleMoreActionsClick}: BloxxCardHeaderProps) => {
    const {title} = bloxx
    return (
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                    {title.charAt(0)}
                </Avatar>
            }
            action={
                <IconButton aria-label="settings" onClick={handleMoreActionsClick}>
                    <MoreVertIcon/>
                </IconButton>
            }
            title={title}
            subheader={user?.name || messages.common.noSelection}
        />
    )
}

interface BloxxCardMenuProps extends BloxxCardProps {
    open: boolean
    anchorEl: null | HTMLElement
    handleBloxxMenuClose: () => void
}

const BloxxCardMenu = ({bloxx, handleBloxxMenuClose, anchorEl, open}: BloxxCardMenuProps) => {
    return (
        <Menu
            id="bloxx-card-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleBloxxMenuClose}
            MenuListProps={{'aria-labelledby': 'basic-button',}}
        >
            <MenuItem onClick={handleBloxxMenuClose}>{messages.crudActions.create}</MenuItem>
            <MenuItem onClick={handleBloxxMenuClose}>{messages.crudActions.edit}</MenuItem>
            <MenuItem onClick={handleBloxxMenuClose}>{messages.crudActions.save}</MenuItem>
            <MenuItem onClick={handleBloxxMenuClose}>{messages.crudActions.delete}</MenuItem>
        </Menu>
    )
}
interface BloxxCardDetailViewProps extends BloxxCardProps {
    expanded: boolean
}

const BloxxCardDetailView = ({bloxx, expanded}: BloxxCardDetailViewProps) => {
    const {content} = bloxx

    return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>
                    {content}
                </Typography>
            </CardContent>
        </Collapse>
    )
}

const BloxxCard = (props: BloxxCardProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMoreActionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleBloxxMenuClose = () => {
        setAnchorEl(null);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const {bloxx} = props
    const user = userRepository.retrieve(bloxx.user)

    return (
        <Card>
            <BloxxCardHeader bloxx={bloxx} user={user} handleMoreActionsClick={handleMoreActionsClick}/>
            <BloxxCardMenu bloxx={bloxx} open={open} anchorEl={anchorEl} handleBloxxMenuClose={handleBloxxMenuClose}/>
            <BloxxCardContent bloxx={bloxx}/>
            <BloxxCardActions bloxx={bloxx} classes={classes} handleExpandClick={handleExpandClick} expanded={expanded}/>
           <BloxxCardDetailView bloxx={bloxx} expanded={expanded}/>
        </Card>
    )
}

export default BloxxCard