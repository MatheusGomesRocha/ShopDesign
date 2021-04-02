import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import ProductReturn from "./components/ProductReturn";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <ProductReturn />

            <Footer/>
        </div>
    )
}