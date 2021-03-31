/**
    TELA DE CADASTRO DE PRODUTO COMO PRESENTE
 */

import './Gift.css';

import React from "react";
import PathComponent from '../sideComponents/Path';
import LineDivComponent from '../sideComponents/LineDiv';
import DefaultBtn from "../sideComponents/DefaultBtn";

export default () => {
    return(
        <div className={"gift"}>
            <PathComponent gift={true} />

            <div className={"mainDiv"}>
                <LineDivComponent bolder={"bold"} title={"Purchase a gift certificate"} />

                <span className={"text"}>
                    This gift certificate will be emailed to the recipient after your order has been paid for.
                </span>

                <div className={"formDiv"}>
                    <div className={"inputDiv"}>
                        <span className={"label"}><span style={{color: '#CD553F', marginRight: 5}}>*</span>
                            Recipient's Name
                        </span>
                        <input className={"input"} />
                    </div>

                    {/*   */}

                    <div className={"inputDiv"}>
                        <span className={"label"}><span style={{color: '#CD553F', marginRight: 5}}>*</span>
                            Recipient's E-mail
                        </span>
                        <input className={"input"} />
                    </div>

                    {/*   */}

                    <div className={"inputDiv"}>
                        <span className={"label"}><span style={{color: '#CD553F', marginRight: 5}}>*</span>
                            Your Name
                        </span>
                        <input className={"input"} />
                    </div>

                    {/*   */}

                    <div className={"inputDiv"}>
                        <span className={"label"}><span style={{color: '#CD553F', marginRight: 5}}>*</span>
                            Your Email
                        </span>
                        <input className={"input"} />
                    </div>

                    {/*   */}

                    <div className={"inputDiv"} style={{marginTop: 30}}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>
                           Gift Certificate Theme
                        </span>

                        <div className={"radioInput"}>
                            <div style={{display: 'flex'}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Dead On Arrival</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 10}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Faulty, Please Supply Details</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 10}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Order Error</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 10}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Other, Please Supply Details</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 10}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Received Wrong Item</span>
                            </div>
                        </div>
                    </div>

                    {/*   */}

                    <div className={"inputDiv"}>
                        <span className={"label"}>Message</span>
                        <textarea className={"textarea"} />
                    </div>

                    {/*   */}

                    <div className={"inputDiv"}>
                        <span className={"label"}>Amount</span>
                        <input className={"input"} defaultValue={"1"}/>
                    </div>
                </div>

                <div className={"submitDiv"}>
                    <span className={"text"}>I understand that gift certificates are non-refundable.</span>
                    <input type={"checkbox"} className={"checkbox"} />
                    <DefaultBtn mTop={"0"} width={"120px"} height={"40px"} title={"Continue"} />
                </div>

            </div>

        </div>
    )
}