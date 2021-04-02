import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Login from "./components/Login";

export default () => {
    return (
        <div>
            <Header callHeader={true} />

            <Login />

            <Footer/>
        </div>
    )
}