import React from 'react';

const Item = ({title, url, thumbnailUrl}) => {
    return (
        <a href={url} target="_blank">
            <img className="h-auto max-w-full rounded-lg" src={thumbnailUrl} alt={title} height={150} width={150}/>
        </a>
    )
}

const PhotoList = ({photos}) => {
    return (
        <div className="grid  place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((photo) => <Item key={photo.id} {...photo}/>)}
        </div>
    );
};
export default PhotoList;