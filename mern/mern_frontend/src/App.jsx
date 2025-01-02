import './App.css';
import ClassComEg from './assets/components/classcomponents/ClassComEg';
import Home from './assets/components/functionalcomponents/Home';
import Navbar from './assets/components/functionalcomponents/Navbar';
import About from './assets/components/functionalcomponents/About';
import Gallery from './assets/components/functionalcomponents/Gallery';
import Contact from './assets/components/functionalcomponents/Contact';
import UseEffect from './assets/components/functionalcomponents/usestate';
import UseRef from './assets/components/functionalcomponents/useRef';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExamResults from './assets/components/functionalcomponents/useContext';
import UseRefno from './assets/components/functionalcomponents/UseRefnoo';
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
          <Route path="/useref" element={<UseRef/>}/>
          <Route path="/useEffect"element={<UseEffect/>}/>
          <Route path="/useContext"element={<ExamResults/>}/>
          <Route path="/useRefTask"element={<UseRefno/>}/>
          </Routes>
        
          </BrowserRouter>
    
    </div>
  );
}

export default App;
