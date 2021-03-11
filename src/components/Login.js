import './Login.css';
import PathComponent from "../sideComponents/Path";
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";


export default () => {
    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 16,
            height: 50,
            marginTop: 15,
            borderRadius: 5,
            width: 120,
            backgroundColor: '#CD553F',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',

            '&:hover': {
                backgroundColor: '#000',
            }
        },
    }))(Button);

    const DefaultBtn2 = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 16,
            height: 50,
            marginTop: 30,
            borderRadius: 5,
            width: 150,
            backgroundColor: '#CD553F',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',

            '&:hover': {
                backgroundColor: '#000',
            }
        },
    }))(Button);

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

                    <DefaultBtn>Login</DefaultBtn>
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
                        <DefaultBtn2>Continue</DefaultBtn2>
                    </Link>
                </div>
            </div>
        </div>
    )
}