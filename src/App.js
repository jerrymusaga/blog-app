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

  const [search, setSearch] = useState('');
  return (
    <div className='App'>
      <Header title="My Blog App"/>
      <Nav search={search} setSearch={setSearch}/> 
      <Routes>
        <Route path='/' element={<Home />} />
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
