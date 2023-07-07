import React from 'react';
import Error from "../components/Error";
import Button from "../components/common/Button/Button";

const Error404Page = () => {
    return (
        <div className="text-center px-6 py-24 sm:py-32 lg:px-8">
            <Error code={404} message="Page not found"/>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button route={`/`}>Return to main</Button>
            </div>
        </div>
    );
};

export default Error404Page;