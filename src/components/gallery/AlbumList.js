import React from 'react';

import Button from "../common/Button/Button";

const Item = ({id, title}) => {
    return (
        <li  className="flex justify-between items-center gap-x-6 py-3">
            <div>{title}</div>
            <div className="flex justify-between gap-x-6">
                <Button route={`/album/${id}`}>View</Button>
            </div>
        </li>
    )
}

const AlbumList = ({albums}) => {
    return (
        <ul role="list" className="divide-y divide-gray-10">
            {albums.map((album) => <Item key={album.id} {...album}/>)}
        </ul>
    );
};

export default AlbumList;