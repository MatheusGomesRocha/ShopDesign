import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";


export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <ForgotPassword />

            <Footer/>
        </div>
    )
}