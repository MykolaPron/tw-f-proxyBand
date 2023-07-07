import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const requestGet = async (url, config) => {
    try {
        const response = await instance.get(url, config)

        if (response.status !== 200) {
            return  Promise.reject(Error(`${response.status} - ${response.statusText}`));
        }

        return response.data
    } catch (e) {
        throw new Error(e.message)
    }
}

export const getUsers = () => requestGet('/users')

export const getPostsByUserId = (userId) =>  requestGet('/posts',{params: {userId}})
export const getPostById = (postId) =>  requestGet('/posts/' + postId)

export const getAlbumsByUserId = (userId) =>  requestGet('/albums',{params: {userId}})
export const getAlbumById = (albumId) =>  requestGet('/albums/' + albumId)
export const getPhotosByAlbumId = (albumId) =>  requestGet('/photos', {params: {albumId}})
