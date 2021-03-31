/**
 TELA DE AFILIAÇÃO, ONDE O USUÁRIO REALIZA O LOGIN OU VAI PARA O CADASTRO COMO AFILIADO DO SITE (ACESSADO PELO FOOTER
 COM O LINK "AFFILIATE"
 */

import './Affiliate.css';

import React from "react";
import PathComponent from '../sideComponents/Path';
import LineDivComponent from '../sideComponents/LineDiv';
import DefaultBtn from '../sideComponents/DefaultBtn';
import AccountSettingsComponent from "../sideComponents/AccountSettings";
import {Link} from "react-router-dom";

export default () => {
    return (
        <div className={"affiliate"}>
            <PathComponent affiliate={true}/>

            <div className={"mainDiv"}>
                <div className={"side"}>

                    {/*       */}
                    <div className={"topAndBottom"}>
                        <LineDivComponent bolder={"bold"} title={"Affiliate Program"}/>

                        <span className={"text"}>
                            fevino affiliate program is free and enables members to earn revenue by placing a link or links
                            on their web site which advertises fevino or specific products on it. Any sales made to customers
                            who have clicked on those links will earn the affiliate commission. The standard commission rate
                            is currently 5%.
                        </span>

                        <span className={"text"}>
                            For more information, visit our FAQ page or see our Affiliate terms & conditions.
                        </span>
                    </div>

                    {/*       */}

                    <div className={"rowDiv"}>

                        {/*       */}
                        <div className={"box"}>

                            <LineDivComponent title={"New affiliate"}/>

                            <span className={"text"}>I am not currently an affiliate.</span>
                            <span className={"text"}>
                                Click Continue below to create a new affiliate account. Please note that this is
                                not connected in any way to your customer account.
                            </span>

                            <Link to={"/New_affiliate"} style={{textDecoration: 'none'}}>
                                <DefaultBtn mTop={"20px"} height={"40px"} width={"100px"} transform={"capitalize"}
                                            title={"Continue"}/>
                            </Link>

                        </div>

                        {/*       */}

                        <div className={"box"}>
                            <LineDivComponent title={"Affiliate Login"}/>

                            <span style={{fontWeight: 'bold'}} className={"text"}>I am a returning affiliate.</span>

                            <div className={"inputDiv"}>
                                <span className={"label"}>Affiliate E-mail</span>
                                <input className={"input"} type={"text"} placeholder={"Affiliate E-mail"}/>
                            </div>

                            <div className={"inputDiv"}>
                                <span className={"label"}>Password</span>
                                <input className={"input"} type={"text"} placeholder={"Password"}/>
                            </div>

                            <Link to={"/Forgot_password"} style={{textDecoration: 'none', color: '#000'}}>
                                <span className={"forgotLink"}>Forgotten Password</span>
                            </Link>

                            <DefaultBtn mTop={"20px"} height={"40px"} width={"80px"} transform={"capitalize"}
                                        title={"Login"}/>
                        </div>

                    </div>
                    {/*   rowDiv    */}
                </div>
                {/*   Side    */}

                <AccountSettingsComponent/>

            </div>
        </div>
    )
}
