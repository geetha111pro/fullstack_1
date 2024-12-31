import './App.css';
import ClassComEg from './assets/components/classcomponents/ClassComEg';
import Home from './assets/components/functionalcomponents/Home';
import Navbar from './assets/components/functionalcomponents/Navbar';
import About from './assets/components/functionalcomponents/About';
import Gallery from './assets/components/functionalcomponents/Gallery';
import Contact from './assets/components/functionalcomponents/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About college="KEC" />}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
    

          </Routes>
        
          </BrowserRouter>
    
    </div>
  );
}

export default App;
