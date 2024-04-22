import './index.css';
import React, { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import {ContextProvider} from "./Components/utils/global.context";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {

    return (

    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/favs" element={ <Favs />} />
            <Route path="/dentist/:id" element={ <Detail />} />
        </Routes>
    <Footer/>
    </div>
);
}

export default App;
