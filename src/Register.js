import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Register from "./components/Register";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <Register />

            <Footer/>
        </div>
    )
}