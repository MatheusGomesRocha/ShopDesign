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
                <HomeIcon mLeft={"30px"} fill={hover ? '#CD553F' : '#000'}/>
            </Link>

            <div className={"lineVertical"}></div>

            <div className={"divText"}>
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

                {props.contact &&
                    <span className={"text"}>Contact Us</span>
                }

                {props.return &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>Account</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>Product Returns</span>
                    </div>
                }

                {props.map &&
                    <span className={"text"}>Site Map</span>
                }

                {props.gift &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>Account</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>Gift Certificate</span>
                    </div>
                }

                {props.affiliate &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>Account</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>Login</span>
                    </div>
                }

                {props.newAffiliate &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>Account</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>Affiliate Register</span>
                    </div>
                }

                {props.allProducts &&
                    <div style={{display: 'flex'}}>
                        <span className={"text"}>{props.category}</span>
                        <div className={"lineVertical"}></div>
                        <span className={"text"}>{props.subCategory}</span>
                    </div>
                }

                {props.product &&
                    <span className={"text"}>{props.name}</span>
                }

                {props.forgotPassword &&
                <div style={{display: 'flex'}}>
                    <span className={"text"}>Account</span>
                    <div className={"lineVertical"}></div>
                    <span className={"text"}>Forgot Password</span>
                </div>
                }
            </div>
        </div>
    )
}