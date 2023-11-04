import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Media from '../pages/Media.tsx';
import Layout from './Layout.tsx';
import PostList from '../pages/PostPage/PostList.tsx';
import PostForm from '../pages/PostPage/PostForm.tsx';
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/post'>
          <Route index element={<PostList />} />
          <Route path='new' element={<PostForm />} />
        </Route>
        <Route path='/media' element={<Media />} />
      </Route>
    </Routes>
  );
}
