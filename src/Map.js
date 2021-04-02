import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Map from "./components/Map";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <Map />

            <Footer/>
        </div>
    )
}