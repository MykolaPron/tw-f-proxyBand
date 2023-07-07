import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Button from "../components/common/Button/Button";
import Loading from "../components/Loading";
import AlbumList from "../components/gallery/AlbumList";
import PageTitle from "../components/PageTitle";

const AlbumsPage = ({fetchInitialData, data}) => {
    let {userId} = useParams();

    const [loading, setLoading] = useState(!data)
    const [albums, setAlbums] = useState(data)

    const fetchAlbums = useCallback(async () => {
        setLoading(true)

        const albums = await fetchInitialData(userId)

        setAlbums(albums)
        setLoading(false)
    }, [userId])

    useEffect(() => {
        !data && fetchAlbums().then()
    }, [fetchAlbums])

    if (loading) return <Loading/>

    return (
        <div>
            <PageTitle>User Albums</PageTitle>
            <div className="flex mb-3 mt-2">
                <Button route={`/`}>Go Back</Button>
            </div>
            <AlbumList albums={albums}/>
        </div>
    );
};

export default AlbumsPage;