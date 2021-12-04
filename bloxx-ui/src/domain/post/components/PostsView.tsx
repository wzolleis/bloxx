import React from "react";
import {Grid} from "@mui/material";
import {useAppSelector} from "app/state/hooks";
import {selectPosts} from "domain/post/state/postSlice";
import {Post} from "common/types/commonTypes";
import PostCard from "domain/post/components/PostView";

const PostsView = () => {
    const {posts} = useAppSelector(selectPosts)

    return (
        <Grid sx={{flexGrow: 1}} container spacing={{xs: 2, md: 3}} columns={{xs: 1, sm: 1, md: 1}}>
            {posts.map((post: Post) => {
                return (
                    <Grid item key={post.key}>
                        <PostCard post={post}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default PostsView