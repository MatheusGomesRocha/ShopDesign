import './ProductReturn.css';
import PathComponent from '../sideComponents/Path';
import LineDivComponent from '../sideComponents/LineDiv';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default () => {
    const SmallBtn = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 18,
            height: 45,
            marginTop: 15,
            borderRadius: 5,
            width: 100,
            backgroundColor: '#CD553F',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',
            textTransform: 'capitalize',

            '&:hover': {
                backgroundColor: '#000',
            }
        },
    }))(Button);

    const BigBtn = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 18,
            height: 45,
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
            textTransform: 'capitalize',

            '&:hover': {
                backgroundColor: '#000',
            }
        },
    }))(Button);

    return (
        <div className={"return"}>
            <PathComponent return={true}/>

            <div className={"mainDiv"}>
                <LineDivComponent bolder={"bold"} title={"Product Returns"}/>

                <span className={"text"}>Please complete the form below to request an RMA number.</span>

                <LineDivComponent bolder={"bold"} title={"Order Information"}/>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>First Name</span>
                        <input type={"text"} className={"input"} placeholder={"First Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Last Name</span>
                        <input type={"text"} className={"input"} placeholder={"Last Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>E-mail</span>
                        <input type={"email address"} className={"input"} placeholder={"E-mail"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Telephone</span>
                        <input type={"text"} className={"input"} placeholder={"Telephone"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Order ID</span>
                        <input type={"text"} className={"input"} placeholder={"Order ID"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Order Date</span>
                        <input type={"text"} className={"input"} placeholder={"Order Date"}/>
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
                        <input type={"text"} className={"input"} value={"1"}/>
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
                    <SmallBtn>Back</SmallBtn>

                    <BigBtn>Submit</BigBtn>
                </div>

            </div>
        </div>
    )
}