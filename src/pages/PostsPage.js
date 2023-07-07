import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Loading from "../components/Loading";
import PostList from "../components/post/PostList";
import Button from "../components/common/Button/Button";
import PageTitle from "../components/PageTitle";

const PostsPage = ({fetchInitialData, data}) => {
    let {userId} = useParams();

    const [loading, setLoading] = useState(!data)
    const [posts, setPosts] = useState(data)

    const fetchPosts = useCallback(async () => {
        setLoading(true)

        const posts = await fetchInitialData(userId)

        setPosts(posts)
        setLoading(false)
    }, [userId])

    useEffect(() => {
        !data && fetchPosts().then()
    }, [fetchPosts])

    if (loading) return <Loading/>

    return (
        <>
            <PageTitle>User Posts</PageTitle>
            <div className="mb-3">
                <Button route={`/`}>Go Back</Button>
            </div>
            <PostList posts={posts}/>
        </>
    );
};

export default PostsPage;