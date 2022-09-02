import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';

function App() {
  return (
    <main>
      <Header />
      <Nav /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-post' element={<NewPost />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
    
  );
}

export default App;
