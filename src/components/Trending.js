import './Trending.css';
import img1 from '../img/new1.jpg';

export default () => {
    let array = [
        {id: 1, img1: img1},
        {id: 2, img1: img1},
        {id: 3, img1: img1},
        {id: 4, img1: img1},
    ]
    return(
        <div className={"trending"}>
            <div className={"topText"}>
                <span className={"title"}>Trending Product</span>
                <div className={"rowDiv"}>
                    <span className={"textBtn"}>Featured</span>
                    <span className={"textBtn"}>Bestseller</span>
                    <span className={"textBtn"}>Latest</span>
                </div>
            </div>

            <div className={"arrayDiv"}>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <div className={"divImg"}>
                            <img className={"img"} />
                        </div>
                        <div className={"itemText"}>
                            <span className={"name"}>Printed Women Kurti</span>
                            <span className={"price"}>R$ 602.00</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}