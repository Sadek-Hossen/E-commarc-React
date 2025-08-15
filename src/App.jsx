
import './App.css'
import Header from './Compunents/Header'
import Hero from './Compunents/Hero'
import { Routes, Route } from 'react-router-dom';
import Contruct from './Compunents/Contruct';
import About from './Compunents/about';
import Shop from './Compunents/Shop';
import Blog from './Compunents/Blog';
import Featured from './Compunents/Featured';
import Card from './Compunents/Card';
import Packed from './Compunents/Packed';
import DayliSels from './Compunents/DayliSels';
import Vagitabls from './Compunents/Vagitabls'; 
import StayHome from './Compunents/StayHome';
import Footer from './Compunents/Footer';
function App() {
 

  return (
    <dispatchEvent>
        <Header/>
      <Routes>
        <Route path='/' element={
        <>
          <Hero />
           <Featured /> 
           <Card />
           <Packed />
           <DayliSels />
           <Vagitabls />
        </>
      } />
   
        <Route path='/About' element={<About />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contruct' element={<Contruct />} />
      </Routes>
      <StayHome />
      <Footer />
    </dispatchEvent>
  )
}

export default App
