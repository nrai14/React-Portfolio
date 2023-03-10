import {Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from "./components/Portfolio";


import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from './pages/Contact';


function App() {
  return (
  <>
   <Header />
    

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
     
  <Footer />

    </>
  
  );
}

export default App;
