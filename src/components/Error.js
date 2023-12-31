import React from 'react';

const Error = ({code, message}) => {
    return (
        <div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Error: {code}</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">{message}</p>
        </div>
    );
};

export default Error;