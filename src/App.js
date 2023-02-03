import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Man from "./pages/Man";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [data, setData] = useState(0);

  const getData = (count) => {
    setData(count);
    console.log(data);
  };

  return (
    <BrowserRouter>
      <Navbar count={data} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/men" element={<Man />} />
        <Route path="/women" element={<Women func={getData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
