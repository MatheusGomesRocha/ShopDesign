import './AccountSettings.css';
import UserIcon from "../svg/user";
import {Link} from "react-router-dom";
import React from "react";

export default () => {
    return (
        <div className={"side"}>
            <div className={"smallBox"}>
                <div style={{display: 'flex'}}>
                    <UserIcon fill={"#CD553F"} width={"25px"} height={"25px"}/>
                    <span className={"title"}>Account Settings</span>
                </div>

                <Link to={"/login"} style={{marginTop: 20, textDecoration: 'none', color: '#000'}}>
                    <span className={"link"}>Login</span>
                </Link>

                <Link to={"/Register"} style={{marginTop: 20, textDecoration: 'none', color: '#000'}}>
                    <span className={"link"}>Register</span>
                </Link>

                <Link to={"/Forgot_password"} style={{marginTop: 20, textDecoration: 'none', color: '#000'}}>
                    <span className={"link"}>Forgotten Password</span>
                </Link>

                <span className={"link"}>My Account</span>
            </div>
        </div>
    )
}