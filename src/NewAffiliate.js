import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import NewAffiliate from "./components/NewAffiliate";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <NewAffiliate />

            <Footer/>
        </div>
    )
}