import React from 'react';

const OrderSelect = ({sort, onChange}) => {
    return (
        <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={sort}
            onChange={onChange}
        >
            {/*Better to disable default value*/}
            <option value="">Select sort order...</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    );
};

export default OrderSelect;