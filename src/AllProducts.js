import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import AllProducts from "./components/AllProducts";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <AllProducts />

            <Footer/>
        </div>
    )
}