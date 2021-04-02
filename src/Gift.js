import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Gift from "./components/Gift";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <Gift />

            <Footer/>
        </div>
    )
}