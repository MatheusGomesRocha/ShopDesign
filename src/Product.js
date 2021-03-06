import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import ProductComponent from './components/Product';

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <ProductComponent />

            <Footer/>
        </div>
    )
}