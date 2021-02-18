import {useState} from "react";
import './Category.css';

import LampIcon from '../svg/lamp';
import ShirtIcon from '../svg/shirts';
import ShoeIcon from '../svg/shoes';
import CameraIcon from '../svg/camera';

export default () => {
    const [hoverItem, setHoverItem] = useState(false);
    const [hoverItem2, setHoverItem2] = useState(false);
    const [hoverItem3, setHoverItem3] = useState(false);
    const [hoverItem4, setHoverItem4] = useState(false);

    let array = [
        {id: 1, text: 'jodhpur pants', Icon: LampIcon, hover: hoverItem, setHover: setHoverItem},
        {id: 2, text: 'mens wear', Icon: ShirtIcon, hover: hoverItem2, setHover: setHoverItem2},
        {id: 3, text: 'ice skates', Icon: ShoeIcon, hover: hoverItem3, setHover: setHoverItem3},
        {id: 4, text: 'dungarees', Icon: CameraIcon, hover: hoverItem4, setHover: setHoverItem4},
    ]

    return(
        <div className={"category"}>
            <span className={"title"}>Our Category</span>
            <div className={"rowDiv"}>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <div className={"itemDashed"} onMouseOver={() => item.setHover(true)} onMouseOut={() => item.setHover(false)}>
                            <div className={"itemBall"}>
                                <item.Icon fill={item.hover ? '#fff' : '#999'} />
                            </div>
                        </div>
                        <span className={"text"}>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}