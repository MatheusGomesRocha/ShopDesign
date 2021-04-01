/**
    TELA PARA O USUÁRIO REALIZAR O LOGIN (ACESSADA PELO FOOTER OU EM QUALQUER AÇÃO QUE PRECISE DE DADOS DO USUÁRIO PARA
    ENTRAR)
 */

import './Login.css';

import React from "react";
import {Link} from "react-router-dom";
import PathComponent from "../sideComponents/Path";
import DefaultBtnComponent from "../sideComponents/DefaultBtn";
import LineDivComponent from '../sideComponents/LineDiv';

export default () => {
    return (
        <div className={"login"}>
            <PathComponent login={true}/>

            <div className={"loginChild"}>
                <div className={"left"}>
                    <LineDivComponent bolder={"bold"} title={"Returning Customer"} />

                    <span className={"bold"}>I am a returning customer</span>

                    <div className={"inputDiv"}>
                        <span className={"label"}>E-mail Address</span>
                        <input placeholder={"E-mail Address"} className={"input"}/>
                    </div>

                    <div className={"inputDiv"}>
                        <span className={"label"}>Password</span>
                        <input placeholder={"Password"} className={"input"}/>
                    </div>

                    <Link to={"/Forgot_password"} style={{textDecoration: 'none'}}>
                        <span className={"forgot"}>Forgotten Password</span>
                    </Link>

                    <DefaultBtnComponent mTop={"30px"} width={"120px"} height={"40px"} title={"Login"}/>
                </div>

                <div className={"right"}>
                    <LineDivComponent title={"New Customer"} bolder={"bold"}/>

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