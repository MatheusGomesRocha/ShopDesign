import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Affiliate from "./components/Affiliate";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <Affiliate />

            <Footer/>
        </div>
    )
}