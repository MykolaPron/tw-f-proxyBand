import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Loading from "../components/Loading";
import PostView from "../components/post/PostView";
import Button from "../components/common/Button/Button";
import PageTitle from "../components/PageTitle";

const PostPage = ({fetchInitialData, data}) => {
    let {postId} = useParams();

    const [loading, setLoading] = useState(!data)
    const [post, setPost] = useState(data)

    const fetchPost = useCallback(async () => {
        setLoading(true)

        const post = await fetchInitialData(postId)

        setPost(post)
        setLoading(false)
    }, [postId])

    useEffect(() => {
        !data && fetchPost().then()
    }, [fetchPost])

    if (loading) return <Loading/>

    return (
        <div>
            <PageTitle>User Post #{post.id}</PageTitle>
            <div className="flex mb-3 mt-2">
                <Button route={`/posts/${post.userId}`}>Go Back</Button>
            </div>
            <PostView {...post}/>
        </div>
    );
};

export default PostPage;