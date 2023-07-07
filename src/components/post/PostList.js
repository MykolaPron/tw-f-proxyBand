import React from 'react';
import Button from "../common/Button/Button";

const Item = ({id, title}) => {
    return (
        <li className="flex justify-between items-center gap-x-6 py-3">
            <div>{title}</div>
            <div className="flex justify-between gap-x-6">
                <Button route={`/post/${id}`}>View</Button>
            </div>
        </li>
    )
}

const PostList = ({posts}) => {
    return (
        <>
            <ul role="list" className="divide-y divide-gray-10">
                {posts.map((post) => <Item key={post.id} {...post}/>)}
            </ul>
        </>
    );
};

export default PostList;