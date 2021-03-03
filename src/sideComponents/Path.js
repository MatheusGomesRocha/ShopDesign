import React, {useState} from "react";
import './Path.css';

import HomeIcon from "../svg/home";

export default () => {
    const [hover, setHover] = useState(false);

    return(
        <div className={"path"}>
            <div style={{cursor: 'pointer'}}
                 onMouseOver={() => setHover(true)}
                 onMouseOut={() => setHover(false)}
            >
                <HomeIcon fill={hover ? '#CD553F' : '#000'}/>
            </div>

            <div className={"lineVertical"}></div>
            <span className={"divTopText"}>Terms & Conditions</span>
        </div>
    )
}