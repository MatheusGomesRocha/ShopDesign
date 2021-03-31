import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";

import AboutComponent from './components/About';

export default () => {
    return (
        <div>
            <AboutComponent />

            <Footer/>
        </div>
    )
}