import React, {useEffect} from "react";
import {Grid} from "@mui/material";
import {useAppDispatch, useAppSelector} from "app/state/hooks";
import {selectPosts} from "domain/post/state/postSlice";
import {Post} from "common/types/commonTypes";
import PostCard from "domain/post/components/PostView";
import {findAllPosts} from "domain/post/actions/postActions";

const PostsView = () => {
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(selectPosts)
    // wird als Dependency für den Effekt benötigt, damit dieser nicht immer wieder aufgerufen wird.
    const postsAsString = JSON.stringify(posts)

    useEffect(() => {
        dispatch(findAllPosts())
    }, [postsAsString])

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