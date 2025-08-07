
import './App.css'
import Header from './Compunents/Header'
import Hero from './Compunents/Hero'
import { Routes, Route } from 'react-router-dom';
import Contruct from './Compunents/Contruct';
import About from './Compunents/about';
import Shop from './Compunents/Shop';
import Blog from './Compunents/Blog';
function App() {
 

  return (
    <dispatchEvent>
        <Header/>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/About' element={<About />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contruct' element={<Contruct />} />
      </Routes>
    </dispatchEvent>
  )
}

export default App
