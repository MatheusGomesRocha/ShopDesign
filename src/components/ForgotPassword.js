import './ForgotPassword.css';

import React from "react";
import LineDivComponent from '../sideComponents/LineDiv';
import DefaultBtnComponent from "../sideComponents/DefaultBtn";
import PathComponent from "../sideComponents/Path";

export default () => {
    return(
        <div className={"forgotPassword"}>
            <PathComponent forgotPassword={true}/>

            <div className={"mainDiv"}>
                <LineDivComponent bolder={"bold"} title={"Forgot Your Password?"} />

                <span className={"text"}>
                    Enter the e-mail address associated with your account. Click submit to have a password
                    reset link e-mailed to you.
                </span>

                <LineDivComponent title={"Your E-Mail Address"} />

                <div className={"rowInput"}>
                    <span className={"label"}><span style={{color: '#CD553F', marginRight: 5}}>*</span>E-Mail Address</span>
                    <input type={"email-address"} placeholder={"E-Mail Address"} className={"input"} />
                </div>

                <div className={"divBtn"}>
                    <DefaultBtnComponent mTop={"15px"} width={"100px"} height={"40px"} title={"Back"}/>

                    <DefaultBtnComponent mTop={"15px"} width={"120px"} height={"40px"} title={"Submit"}/>
                </div>
            </div>
        </div>
    )
}