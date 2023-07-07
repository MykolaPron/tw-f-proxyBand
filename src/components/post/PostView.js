import React from 'react';

const PostView = ({title, body}) => {
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold dark:text-white mb-3">{title}</h2>
                <p className="mt-6 text-base leading-7 text-gray-600">{body}</p>
            </div>
        </>
    );
};

export default PostView;