import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Loading from "../components/Loading";
import Button from "../components/common/Button/Button";
import PhotoList from "../components/gallery/PhotoList";
import PageTitle from "../components/PageTitle";

const AlbumPage = ({fetchInitialData, data}) => {
    let {albumId} = useParams();

    const [loading, setLoading] = useState(!data)
    const [photos, setPhotos] = useState(data?.photos)
    const [album, setAlbum] = useState(data?.album)

    const fetchAlbumPhotos = useCallback(async () => {
        setLoading(true)

        const data = await fetchInitialData(albumId)

        setAlbum(data.album)
        setPhotos(data.photos)

        setLoading(false)
    }, [albumId])

    useEffect(() => {
        !data && fetchAlbumPhotos().then()
    }, [fetchAlbumPhotos])


    if (loading) return <Loading/>

    return (
        <div>
            <PageTitle>User Album #{album.id}</PageTitle>
            <div className="mb-3 mb-5">
                <Button route={`/albums/${album?.userId}`}>Go Back</Button>
            </div>
            <PhotoList photos={photos}/>
        </div>
    );
};

export default AlbumPage;