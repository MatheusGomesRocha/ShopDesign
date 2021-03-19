import {useState} from "react";
import './Register.css';
import PathComponent from '../sideComponents/Path';
import LineDivComponent from '../sideComponents/LineDiv';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default () => {
    const [checked, setChecked] = useState(false);

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

    return (
        <div className={"register"}>
            <PathComponent register={true}/>

            <div className={"form"}>
                <LineDivComponent bolder={"bold"} title={"Register Account"} />

                <span className={"text"}>If you already have an account with us, please login at the login page</span>

                {/*       */}

                <LineDivComponent title={"Your Personal Details"} />

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
                        <input type={"email-address"} className={"input"} placeholder={"E-mail"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Telephone</span>
                        <input type={"text"} className={"input"} placeholder={"Telephone"}/>
                    </div>
                </div>

                {/*       */}

                <LineDivComponent title={"Your Password"} />

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Password</span>
                        <input type={"password"} className={"input"} placeholder={"Password"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Password Confirm</span>
                        <input type={"password"} className={"input"} placeholder={"Password Confirm"}/>
                    </div>
                </div>

                {/*       */}

                <LineDivComponent title={"Newsletter"} />

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <div className={"label"}>Subscribe</div>

                        <input name={"radio"} type={"radio"} className={"inputRadio"}/>
                        <span>Yes</span>

                        <input checked={true} name={"radio"} type={"radio"} className={"inputRadio"} />
                        <span>No</span>
                    </div>
                </div>

                {/*       */}

                <LineDivComponent title={"Captcha"} />

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}>
                            <span style={{color: 'red', marginRight: 5}}>*</span>
                            Enter the code in the box
                        </span>
                        <input type={"text"} className={"input"} />
                    </div>

                    {/*CAPTCHA*/}

                </div>

                <div className={"finishing"}>
                    <span className={"text"}>I have read and agree to the <strong>Privacy Policy</strong></span>
                    <input className={"checkbox"} type={"checkbox"} />
                    <DefaultBtn>Continue</DefaultBtn>
                </div>
            </div>
        </div>
    )
}