import {useState} from "react";

import './Trending.css';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';
import img9 from '../img/img9.png';
import img10 from '../img/img10.png';
import img11 from '../img/img11.png';
import img12 from '../img/img12.png';
import img13 from '../img/img13.png';

export default () => {
    const [array, setArray] = useState(1);

    let arrayFeatured = [
        {id: 1, img: img1, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {id: 2, img: img2, name: 'Crepe Checkered Salwar Suit Material (Unstitched)', price: '120,99'},
        {id: 3, img: img3, name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material', price: '125,80'},
        {id: 4, img: img4, name: 'Embroidered Satin Blend Stitched Anarkali', price: '170,99'},
        {id: 5, img: img5, name: 'Canvas Slip On Sneakers For Women', price: '231,50'},
        {id: 6, img: img6, name: 'Date Unique New Analog Watch - For Men', price: '80,00'},
        {id: 7, img: img7, name: 'Embroidered Orange Women Dupatta', price: '57,05'},
        {id: 8, img: img8, name: 'Applique Satin Blend Semi Stitched Anarkali Gown', price: '348,12'},
    ];

    let arrayBestseller = [
        {id: 8, img: img2, name: 'Applique Satin Blend Semi Stitched Anarkali Gown', price: '348,12'},
        {id: 4, img: img7, name: 'Embroidered Satin Blend Stitched Anarkali', price: '170,99'},
        {id: 7, img: img13, name: 'Embroidered Orange Women Dupatta', price: '57,05'},
        {id: 2, img: img1, name: 'Crepe Checkered Salwar Suit Material (Unstitched)', price: '120,99'},
        {id: 1, img: img5, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {id: 3, img: img10, name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material', price: '125,80'},
        {id: 6, img: img3, name: 'Date Unique New Analog Watch - For Men', price: '80,00'},
        {id: 5, img: img12, name: 'Canvas Slip On Sneakers For Women', price: '231,50'},

    ];

    let arrayLatest = [
        {id: 3, img: img1, name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material', price: '125,80'},
        {id: 1, img: img8, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {id: 5, img: img4, name: 'Canvas Slip On Sneakers For Women', price: '231,50'},
        {id: 8, img: img5, name: 'Applique Satin Blend Semi Stitched Anarkali Gown', price: '348,12'},
        {id: 2, img: img11, name: 'Crepe Checkered Salwar Suit Material (Unstitched)', price: '120,99'},
        {id: 4, img: img9, name: 'Embroidered Satin Blend Stitched Anarkali', price: '170,99'},
        {id: 7, img: img2, name: 'Embroidered Orange Women Dupatta', price: '57,05'},
        {id: 6, img: img7, name: 'Date Unique New Analog Watch - For Men', price: '80,00'},
    ];

    return(
        <div className={"trending"}>
            <div className={"topText"}>
                <span className={"title"}>Trending Product</span>
                <div className={"rowDiv"}>
                    <span onClick={() => setArray(1)} style={{color: array == 1 ? '#CD553F' : '#999'}} className={"textBtn"}>Featured</span>
                    <span onClick={() => setArray(2)} style={{color: array == 2 ? '#CD553F' : '#999'}} className={"textBtn"}>Bestseller</span>
                    <span onClick={() => setArray(3)} style={{color: array == 3 ? '#CD553F' : '#999'}} className={"textBtn"}>Latest</span>
                </div>
            </div>

            <div className={"arrayDiv"}>
                {array == 1 &&
                    arrayFeatured.map((item, k) => (
                        <div className={"itemDiv"}>
                            <div className={"itemImg"}>
                                <img src={item.img} className={"img"} />
                            </div>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </div>
                    ))
                }

                {array == 2 &&
                    arrayBestseller.map((item, k) => (
                        <div className={"itemDiv"}>
                            <div className={"itemImg"}>
                                <img src={item.img} className={"img"} />
                            </div>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </div>
                    ))
                }

                {array == 3 &&
                    arrayLatest.map((item, k) => (
                        <div className={"itemDiv"}>
                            <div className={"itemImg"}>
                                <img src={item.img} className={"img"} />
                            </div>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}