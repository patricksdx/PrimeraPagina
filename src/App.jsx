import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router className="bg-white min-h-screen">
      <Header></Header>
      <Routes>
      <Route path='/PrimeraPagina' exact element={<Home />}/>
      <Route path='/About' element={<About />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
