import './Login.css';
import PathComponent from "../sideComponents/Path";

import {Link} from "react-router-dom";
import React from "react";
import DefaultBtnComponent from "../sideComponents/DefaultBtn";


export default () => {


    return (
        <div className={"login"}>
            <PathComponent login={true}/>

            <div className={"loginChild"}>
                <div className={"left"}>
                    <span className={"title"}>Returning Customer</span>
                    <div className={"lineHorizontal"}></div>

                    <span className={"bold"}>I am a returning customer</span>

                    <div className={"inputDiv"}>
                        <span className={"label"}>E-mail Address</span>
                        <input placeholder={"E-mail Address"} className={"input"}/>
                    </div>

                    <div className={"inputDiv"}>
                        <span className={"label"}>Password</span>
                        <input placeholder={"Password"} className={"input"}/>
                    </div>

                    <span className={"forgot"}>Forgotten Password</span>

                    <DefaultBtnComponent mTop={"30px"} width={"120px"} height={"40px"} title={"Login"}/>
                </div>

                <div className={"right"}>
                    <span className={"title"}>New Customer</span>
                    <div className={"lineHorizontal"}></div>

                    <span className={"bold"}>Register Account</span>

                    <span className={"text"}>
                        By creating an account you will be able to shop faster, be up to date on an order's status,
                        and keep track of the orders you have previously made.
                    </span>

                    <Link to={"/Register"} style={{textDecoration: 'none'}}>
                        <DefaultBtnComponent mTop={"30px"} width={"150px"} height={"40px"} title={"Continue"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}