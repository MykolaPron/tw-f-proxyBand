import UsersPage from "./pages/UsersPage";
import {getPhotosByAlbumId, getAlbumsByUserId, getPostById, getPostsByUserId, getUsers, getAlbumById} from "./services";
import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import AlbumsPage from "./pages/AlbumsPage";
import AlbumPage from "./pages/AlbumPage";

const routes =  [
  {
    path: '/',
    component: UsersPage,
    fetchInitialData: (path = '') => getUsers(path.split('/').pop())
  },
  {
    path: '/posts/:userId',
    component: PostsPage,
    fetchInitialData: (path = '') => getPostsByUserId(path.split('/').pop())
  },
  {
    path: '/post/:postId',
    component: PostPage,
    fetchInitialData: (path = '') => getPostById(path.split('/').pop())
  },
  {
    path: '/albums/:userId',
    component: AlbumsPage,
    fetchInitialData: (path = '') => getAlbumsByUserId(path.split('/').pop())
  },
  {
    path: '/album/:albumId',
    component: AlbumPage,
    fetchInitialData: async (path = '') => {
      const albumId = path.split('/').pop()

      const photos = await getPhotosByAlbumId(albumId)
      const album = await getAlbumById(albumId)

      return {
        album,
        photos
      }
    }
  },
]

export default routes