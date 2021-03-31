/**
    TELA COM FORMULÁRIO PARA RETORNAR UM PRODUTO INDESEJADO (ACESSADO PELO FOOTER NO LINK "RETURNS")
 */



import './ProductReturn.css';

import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PathComponent from '../sideComponents/Path';
import LineDivComponent from '../sideComponents/LineDiv';
import DefaultBtnComponent from "../sideComponents/DefaultBtn";

import CalendarIcon from '../svg/calendar';

export default () => {
    const [date, setDate] = useState();
    const [viewCalendar, setViewCalendar] = useState(false);

    useEffect(() => {
        setDate(new Date())
    }, [])

    return (
        <div className={"return"}>
            <PathComponent return={true}/>

            <div className={"mainDiv"}>
                <LineDivComponent bolder={"bold"} title={"Product Returns"}/>

                <span className={"text"}>Please complete the form below to request an RMA number.</span>

                <LineDivComponent bolder={"bold"} title={"Order Information"}/>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>First Name</span>
                        <input type={"text"} className={"input"} placeholder={"First Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>Last Name</span>
                        <input type={"text"} className={"input"} placeholder={"Last Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>E-mail</span>
                        <input type={"email-address"} className={"input"} placeholder={"E-mail"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>Telephone</span>
                        <input type={"text"} className={"input"} placeholder={"Telephone"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Order ID</span>
                        <input type={"text"} className={"input"} placeholder={"Order ID"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Order Date</span>
                        <input defaultValue={date} style={{width: '95%'}} type={"text"} className={"input"} placeholder={"Order Date"}/>
                        <div className={"btnCalendar"}>
                            <div onClick={viewCalendar ? () => setViewCalendar(false) : () => setViewCalendar(true)} className={"calendarIcon"}>
                                <CalendarIcon />
                            </div>
                            <div style={{display: viewCalendar ? 'flex' : 'none'}} className={"calendar"}>
                                <Calendar
                                    onChange={(v) => setDate(v) }
                                    value={date}
                                    defaultValue={date}
                                    maxDate={new Date()}
                                />
                            </div>
                        </div>

                    </div>


                </div>

                {/*     */}

                <LineDivComponent title={"Product Information"}/>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>Product Name</span>
                        <input type={"text"} className={"input"} placeholder={"Product Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>Product Code</span>
                        <input type={"text"} className={"input"} placeholder={"Product Code"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Quantity</span>
                        <input type={"text"} className={"input"} defaultValue={"1"}/>
                    </div>

                    <div className={"rowInput"} style={{marginTop: 30}}>
                        <span className={"label"} style={{marginTop: 0}}><span style={{color: 'red', marginRight: 5}}>*</span>Reason for Return</span>
                        <div className={"radioInput"}>
                            <div style={{display: 'flex'}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Dead On Arrival</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 5}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Faulty, Please Supply Details</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 5}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Order Error</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 5}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Other, Please Supply Details</span>
                            </div>

                            <div style={{display: 'flex', marginTop: 5}}>
                                <input name={"radio"} className={"radio"} type={"radio"}/>
                                <span className={"radioSpan"}>Received Wrong Item</span>
                            </div>


                        </div>
                    </div>

                    <div className={"rowInput"} style={{marginTop: 30}}>
                        <span className={"label"} style={{marginTop: 0}}><span style={{color: 'red', marginRight: 5}}>*</span>Product is opened</span>

                        <input name={"radio1"} className={"radio"} type={"radio"} />
                        <span className={"radioSpan"}>Yes</span>

                        <input name={"radio1"} className={"radio"} type={"radio"} style={{marginLeft: 25}}/>
                        <span className={"radioSpan"}>No</span>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Faulty or other Details</span>
                        <textarea className={"textarea"}/>
                    </div>

                </div>

                {/*     */}

                <LineDivComponent title={"Captcha"}/>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>Enter the code in the box</span>
                        <input type={"text"} className={"input"} />
                    </div>

                </div>

                <div className={"divBtn"}>
                    <DefaultBtnComponent mTop={"15px"} width={"100px"} height={"40px"} title={"Back"}/>

                    <DefaultBtnComponent mTop={"15px"} width={"120px"} height={"40px"} title={"Submit"}/>
                </div>

            </div>
        </div>
    )
}