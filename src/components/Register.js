import './Register.css';
import PathComponent from '../sideComponents/Path';

export default () => {
    return (
        <div className={"register"}>
            <PathComponent register={true}/>

            <div className={"form"}>
                <div className={"titleLine"}>
                    <strong className={"title"}>Register Account</strong>
                    <div className={"line"}></div>
                </div>

                <span className={"text"}>If you already have an account with us, please login at the login page</span>

                {/*       */}

                <div className={"titleLine"}>
                    <span className={"title"}>Your Personal Details</span>
                    <div className={"line"}></div>
                </div>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>First Name</span>
                        <input type={"text"} className={"input"} placeholder={"First Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>Last Name</span>
                        <input type={"text"} className={"input"} placeholder={"Last Name"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>E-mail</span>
                        <input type={"email-address"} className={"input"} placeholder={"E-mail"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>Telephone</span>
                        <input type={"number"} className={"input"} placeholder={"Telephone"}/>
                    </div>
                </div>

                {/*       */}

                <div className={"titleLine"}>
                    <span className={"title"}>Your Password</span>
                    <div className={"line"}></div>
                </div>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>Password</span>
                        <input type={"password"} className={"input"} placeholder={"Password"}/>
                    </div>

                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>Password Confirm</span>
                        <input type={"password"} className={"input"} placeholder={"Password Confirm"}/>
                    </div>
                </div>

                {/*       */}

                <div className={"titleLine"}>
                    <span className={"title"}>Newsletter</span>
                    <div className={"line"}></div>
                </div>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <div className={"label"}>Subscribe</div>

                        <input type={"radio"} className={"input"}/>
                        <span>Yes</span>

                        <input checked={true} type={"radio"} className={"input"}/>
                        <span>No</span>
                    </div>
                </div>

                {/*       */}

                <div className={"titleLine"}>
                    <span className={"title"}>Captcha</span>
                    <div className={"line"}></div>
                </div>

                <div className={"divInput"}>
                    <div className={"rowInput"}>
                        <span className={"label"}><span style={{color: 'red'}}>*</span>Enter the cod in the box</span>
                        <input type={"text"} className={"input"} />
                    </div>

                    <div className={"captcha"}>6a3356</div>
                </div>
            </div>
        </div>
    )
}