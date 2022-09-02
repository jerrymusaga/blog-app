import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01 2022 15:34:56 PM",
      body: 'Lorem thr ddc fggim rgrg rrrgg rrth gggd grreeb dfhdg gjghdsg gejgbg' 
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "February 01 2022 15:34:56 PM",
      body: 'Lorem thr ddcbfb cbcfhgh ggim rgrg rrrgg rrth gggd grreeb dfhdg gjghdsg gejgbg' 
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "December 11 2022 15:34:56 AM",
      body: 'Lorem thr ddc fggim rgrg rrrgg rrth gggd grreeb dfhdg gjghdsg gejgbg' 
    }
  ])
  const [search, setSearch] = useState('');
  const  [searchResult, setSearchResult] = useState([]);
  return (
    <div className='App'>
      <Header title="My Blog App"/>
      <Nav search={search} setSearch={setSearch}/> 
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
