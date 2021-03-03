import React, {useState} from "react";
import './Path.css';

import HomeIcon from "../svg/home";
import {Link} from "react-router-dom";

export default () => {
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
            <span className={"divTopText"}>Terms & Conditions</span>
        </div>
    )
}