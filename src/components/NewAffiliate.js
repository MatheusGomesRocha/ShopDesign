/**
    TELA PARA CADASTRO DE NOVOS AFILIADOS (ACESSADO PELA TELA AFFILIATE, CLICANDO NO BOTÃO "CONTINUE")
 */

import './NewAffiliate.css';

import React from "react";
import PathComponent from '../sideComponents/Path';
import LineDivComponent from '../sideComponents/LineDiv';
import AccountSettingsComponent from "../sideComponents/AccountSettings";

export default () => {
    return(
        <div className={"newAffiliate"}>
            <PathComponent newAffiliate={true} />

            <div className={"mainDiv"}>
                <div className={"side"}>
                    <LineDivComponent bolder={"bold"} title={"Affiliate Program"} />

                    <span className={"text"}>
                    If you already have an account with us, please login at the login page.
                </span>

                    <span className={"text"}>
                    To create an affiliate account, fill in the form below ensuring you complete all the required fields:
                </span>

                    {/*    */}

                    <LineDivComponent title={"Your Personal Details"} />
                    <div className={"divInput"}>
                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>First Name</span>
                            <input type={"text"} className={"input"} placeholder={"First Name"} />
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Last Name</span>
                            <input type={"text"} className={"input"} placeholder={"Last Name"} />
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>E-mail</span>
                            <input type={"email-address"} className={"input"} placeholder={"E-mail"} />
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Telephone</span>
                            <input type={"text"} className={"input"} placeholder={"Telephone"} />
                        </div>
                    </div>

                    {/*    */}

                    <LineDivComponent title={"Your Affiliate Information"} />
                    <div className={"divInput"}>
                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Company</span>
                            <input type={"text"} className={"input"} placeholder={"Company"} />
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}>Web Site</span>
                            <input type={"text"} className={"input"} placeholder={"Web Site"} />
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}>Tax ID</span>
                            <input type={"text"} className={"input"} placeholder={"Tax ID"} />
                        </div>

                        <div className={"rowInput"} style={{marginTop: 30}}>
                            <span className={"label"} style={{marginTop: 0}}><span style={{color: 'red', marginRight: 5}}>*</span>Reason for Return</span>
                            <div className={"radioInput"}>
                                <div style={{display: 'flex'}}>
                                    <input name={"radio"} className={"radio"} type={"radio"}/>
                                    <span className={"radioSpan"}>Cheque</span>
                                </div>

                                <div style={{display: 'flex', marginTop: 5}}>
                                    <input name={"radio"} className={"radio"} type={"radio"}/>
                                    <span className={"radioSpan"}>PayPal</span>
                                </div>

                                <div style={{display: 'flex', marginTop: 5}}>
                                    <input name={"radio"} className={"radio"} type={"radio"}/>
                                    <span className={"radioSpan"}>Bank Transfer</span>
                                </div>

                            </div>
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Cheque Payee Name</span>
                            <input type={"text"} className={"input"} placeholder={"Cheque Payee Name"} />
                        </div>
                    </div>

                    {/*    */}

                    <LineDivComponent title={"Your Password"} />
                    <div className={"divInput"}>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Password</span>
                            <input type={"text"} className={"input"} placeholder={"Password"} />
                        </div>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Password Confirm</span>
                            <input type={"text"} className={"input"} placeholder={"Password Confirm"} />
                        </div>
                    </div>

                    {/*    */}

                    <LineDivComponent title={"Captcha"} />
                    <div className={"divInput"}>

                        <div className={"rowInput"}>
                            <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>
                                Enter the code in the box
                            </span>
                            <input type={"text"} className={"input"} />
                        </div>
                    </div>

                </div>

                <AccountSettingsComponent />
            </div>
        </div>
    )
}