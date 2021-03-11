import React, {useState} from "react";
import './Path.css';

import HomeIcon from "../svg/home";
import {Link} from "react-router-dom";

export default (props) => {
    const [hover, setHover] = useState(false);

    return (
        <div className={"path"}>
            <Link to={"/"} style={{textDecoration: 'none', color: '#000', cursor: 'pointer'}}
                  onMouseOver={() => setHover(true)}
                  onMouseOut={() => setHover(false)}
            >


                <HomeIcon fill={hover ? '#CD553F' : '#000'}/>
            </Link>

            <div className={"lineVertical"}></div>

            <div className={"divTopText"}>
                {props.about &&
                    <span className={"text"}>Terms & Conditions</span>
                }

                {props.login &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>Account</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>Login</span>
                    </div>
                }

                {props.register &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>Account</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>Register</span>
                    </div>
                }
            </div>
        </div>
    )
}