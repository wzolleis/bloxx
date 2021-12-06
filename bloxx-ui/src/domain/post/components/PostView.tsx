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
import {Post, Nullable, User} from "common/types/commonTypes";
import userRepository from "domain/user/repository/userRepository";
import {useGetUserByNameQuery} from "domain/user/api/userApi";

const styles = {
    parentFlexSplit: {
        display: "flex",
        justifyContent: "space-between"
    },
    rightAlignItem: {
        marginLeft: "auto"
    }
}
type PostCardStyles = keyof typeof styles
const useStyles = makeStyles(styles)

export interface PostCardProps {
    post: Post
}

interface PostCardHeaderProps extends PostCardProps {
    user: Nullable<User>
    post: Post
    handleMoreActionsClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface PostCardActionsProps extends PostCardProps {
    classes: ClassNameMap<PostCardStyles>
    handleExpandClick: () => void
    expanded: boolean
}

const BloxxCardActions = ({classes, handleExpandClick, expanded}: PostCardActionsProps) => {
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

const PostCardContent = ({post: {content}}: PostCardProps) => {
    return (
        <CardContent>
            <Typography variant="body2" color="text.secondary">{content}</Typography>
        </CardContent>
    )
}

const PostCardHeader = ({post, user, handleMoreActionsClick}: PostCardHeaderProps) => {
    const {title} = post
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

interface PostCardMenuProps extends PostCardProps {
    open: boolean
    anchorEl: null | HTMLElement
    handleBloxxMenuClose: () => void
}

const PostCardMenu = ({post, handleBloxxMenuClose, anchorEl, open}: PostCardMenuProps) => {
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
interface PostCardDetailViewProps extends PostCardProps {
    expanded: boolean
}

const PostCardDetailView = ({post, expanded}: PostCardDetailViewProps) => {
    const {content} = post

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

const PostView = (props: PostCardProps) => {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const {data} = useGetUserByNameQuery(props.post.user)
    console.log("user by name", JSON.stringify(data))

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

    const {post} = props
    let user = null
    if (data?.length === 1) user = data[0]

    return (
        <Card>
            <PostCardHeader post={post} user={user} handleMoreActionsClick={handleMoreActionsClick}/>
            <PostCardMenu post={post} open={open} anchorEl={anchorEl} handleBloxxMenuClose={handleBloxxMenuClose}/>
            <PostCardContent post={post}/>
            <BloxxCardActions post={post} classes={classes} handleExpandClick={handleExpandClick} expanded={expanded}/>
           <PostCardDetailView post={post} expanded={expanded}/>
        </Card>
    )
}

export default PostView