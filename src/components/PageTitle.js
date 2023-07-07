import React from 'react';

const PageTitle = ({children}) => {
    return (
        <h1 className="text-4xl font-bold dark:text-white mb-3">{children}</h1>
    );
};

export default PageTitle;