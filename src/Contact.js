import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <Contact />

            <Footer/>
        </div>
    )
}