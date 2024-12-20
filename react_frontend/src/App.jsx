import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import AskVet from "./components/AskVet";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import "./styles/fishcreek.css";
function App() {
    return (
        <Router>
            <div id="wrapper">
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/askvet" element={<AskVet />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}
export default App;