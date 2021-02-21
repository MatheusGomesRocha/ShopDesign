import './Ad.css';

import ad1 from '../img/header.png';
import ad2 from '../img/ad2.png';

export default () => {
    let array = [
        {id: 1, discount: '20% off', title: 'Women New Collections', img: ad1},
        {id: 2, discount: '40% off', title: 'Men Collections 2020', img: ad2},
    ];

    return(
        <div className={"ad"}>
            <div className={"arrayDiv"}>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <div className={"left"}>
                            <span className={"smallText"}>Big Discount</span>
                            <span className={"bigText"}>{item.discount}</span>
                            <span className={"title"}>{item.title}</span>
                            <div className={"btn"} disabled>Shop Now</div>
                        </div>
                        <img className={"img"} src={item.img} />
                        <div className={"divHidden"}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}