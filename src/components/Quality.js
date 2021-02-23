import {useState} from 'react';
import './Quality.css';

import HeadphoneIcon from '../svg/headphone';
import CoinIcon from '../svg/coin';
import TruckIcon from '../svg/truck';
import GiftIcon from '../svg/gift';

export default () => {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    let array = [
        {id: 1, Icon: HeadphoneIcon, title: '24/7 Support', hover: hover1, setHover: setHover1},
        {id: 2, Icon: CoinIcon, title: 'Secure Payment', hover: hover2, setHover: setHover2},
        {id: 3, Icon: TruckIcon, title: 'World Wide Shipping', hover: hover3, setHover: setHover3},
        {id: 4, Icon: GiftIcon, title: 'Special Gift Cards', hover: hover4, setHover: setHover4},
    ];

    return(
        <div className={"quality"}>
            <div className={"arrayDiv"}>
                {array.map((item, k) => (
                    <div onMouseOver={() => item.setHover(true)} onMouseOut={() => item.setHover(false)} className={"itemDiv"}>
                        <item.Icon fill={item.hover ? '#CD553F' : '#fff'}/>
                        <span className={"title"}>{item.title}</span>
                        <span className={"subTitle"}>Passage of Lorem Ipsum</span>
                    </div>
                ))}
            </div>
        </div>
    )
}