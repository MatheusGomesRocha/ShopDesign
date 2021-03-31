import './AccountSettings.css';
import UserIcon from "../svg/user";

export default () => {
    return(
        <div className={"side"}>
            <div className={"smallBox"}>
                <div style={{display: 'flex'}}>
                    <UserIcon fill={"#CD553F"} width={"25px"} height={"25px"}/>
                    <span className={"title"}>Account Settings</span>
                </div>

                <span className={"link"}>Login</span>
                <span className={"link"}>Register</span>
                <span className={"link"}>Forgotten Password</span>
                <span className={"link"}>My Account</span>
            </div>
        </div>
    )
}