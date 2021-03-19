import PathComponent from '../sideComponents/Path';
import './Contact.css';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

import HomeIcon from '../svg/home';
import ClockIcon from '../svg/clock';
import PhoneIcon from '../svg/phone';
import LineDivComponent from "../sideComponents/LineDiv";

export default () => {
    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 18,
            height: 40,
            marginTop: 15,
            borderRadius: 5,
            width: 100,
            backgroundColor: '#CD553F',
            color: '#fff',
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
        <div className={"contact"}>
            <PathComponent contact={true}/>

            <span className={"bigTitle"}>Contact Us</span>

            <div className={"mainDiv"}>

                <div className={"side"}>
                    <LineDivComponent title={"Our Location"} />


                    <div className={"info"}>
                        <HomeIcon mLeft={"0"} mRight={"10px"}/>
                        <span className={"infoText"}>Fashion Store Uffin Street Pufville India Surat - 395006</span>
                    </div>

                    <div className={"info"}>
                        <PhoneIcon/>
                        <span className={"infoText"}>123456789</span>
                    </div>

                    <div className={"info"}>
                        <ClockIcon/>
                        <span className={"infoText"}>9:00 AM To 6:00 PM</span>
                    </div>
                </div>

                {/*    */}

                <div className={"side"}>
                    <LineDivComponent title={"Contact Form"} />


                    <div className={"divInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Your Name</span>
                        <input type={"text"} className={"input"}/>
                    </div>

                    <div className={"divInput"}>
                        <span className={"label"}><span
                            style={{color: 'red', marginRight: 5}}>*</span>E-mail Address</span>
                        <input type={"email"} className={"input"}/>
                    </div>

                    <div className={"divInput"}>
                        <span className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span>Enquiry</span>
                        <textarea type={"text"} className={"inputArea"}/>
                    </div>
                </div>

                {/*    */}

            </div>

            <div className={"captcha"}>
                <LineDivComponent title={"Captcha"} />

                <div className={"divInput"}>
                    <span className={"label"}>
                        <span style={{color: 'red', marginRight: 5}}>*</span>
                        Enter the code in the box
                    </span>
                    <input type={"text"} className={"input"}/>
                </div>
            </div>

            <div className={"submitBtn"}>
                <DefaultBtn>Submit</DefaultBtn>
            </div>
        </div>
    )
}