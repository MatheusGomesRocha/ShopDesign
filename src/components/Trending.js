import React, {useState} from "react";
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

import Icon1 from '../svg/shopping-cart';
import Icon2 from '../svg/open-window';
import Icon3 from '../svg/heart';
import Icon4 from '../svg/adjust';

import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';

import Modal from '../sideComponents/Modal.js'
import SuccessMessage from '../sideComponents/SuccessMessage';

import {Link} from 'react-router-dom';

export default () => {
    const [open, setOpen] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);

    const [btnPressed, setBtnPressed] = useState(false);

    const [array, setArray] = useState(1);

    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');

    const handleClickOpen = (name, price, img) => {
        setOpen(true);
        setName(name);
        setPrice(price);
        setImg(img);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenMessage = (name, value) => {
        setOpenMessage(true);
        setName(name);

        if (value == 'cart') {
            setBtnPressed('cart');
        } else if (value == 'wish') {
            setBtnPressed('wish');
        } else if (value == 'compare') {
            setBtnPressed('compare');
        }
    }

    let arrayFeatured = [
        {id: 1, img: img1, sale: true, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {id: 2, img: img2, name: 'Crepe Checkered Salwar Suit Material (Unstitched)', price: '120,99'},
        {id: 3, img: img3, sale: true, name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material', price: '125,80'},
        {id: 4, img: img4, sale: true, name: 'Embroidered Satin Blend Stitched Anarkali', price: '170,99'},
        {id: 5, img: img5, name: 'Canvas Slip On Sneakers For Women', price: '231,50'},
        {id: 6, img: img6, name: 'Date Unique New Analog Watch - For Men', price: '80,00'},
        {id: 7, img: img7, name: 'Embroidered Orange Women Dupatta', price: '57,05'},
        {id: 8, img: img8, sale: true, name: 'Applique Satin Blend Semi Stitched Anarkali Gown', price: '348,12'},
    ];

    let arrayBestseller = [
        {id: 8, img: img2, name: 'Applique Satin Blend Semi Stitched Anarkali Gown', price: '348,12'},
        {id: 4, img: img7, name: 'Embroidered Satin Blend Stitched Anarkali', price: '170,99'},
        {id: 7, img: img13, sale: true, name: 'Embroidered Orange Women Dupatta', price: '57,05'},
        {id: 2, img: img1, sale: true, name: 'Crepe Checkered Salwar Suit Material (Unstitched)', price: '120,99'},
        {id: 1, img: img5, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {id: 3, img: img10, sale: true, name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material', price: '125,80'},
        {id: 6, img: img3, name: 'Date Unique New Analog Watch - For Men', price: '80,00'},
        {id: 5, img: img12, name: 'Canvas Slip On Sneakers For Women', price: '231,50'},

    ];

    let arrayLatest = [
        {id: 3, img: img1, sale: true, name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material', price: '125,80'},
        {id: 1, img: img8, sale: true, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {id: 5, img: img4, sale: true, name: 'Canvas Slip On Sneakers For Women', price: '231,50'},
        {id: 8, img: img5, name: 'Applique Satin Blend Semi Stitched Anarkali Gown', price: '348,12'},
        {id: 2, img: img11, sale: true, name: 'Crepe Checkered Salwar Suit Material (Unstitched)', price: '120,99'},
        {id: 4, img: img9, name: 'Embroidered Satin Blend Stitched Anarkali', price: '170,99'},
        {id: 7, img: img2, name: 'Embroidered Orange Women Dupatta', price: '57,05'},
        {id: 6, img: img7, sale: true, name: 'Date Unique New Analog Watch - For Men', price: '80,00'},
    ];

    return (
        <div className={"trending"}>

            <div className={"topText"}>
                <span className={"title"}>Trending Product</span>
                <div className={"rowDiv"}>
                    <span onClick={() => setArray(1)} style={{color: array == 1 ? '#CD553F' : '#999'}}
                          className={"textBtn"}>Featured</span>
                    <span onClick={() => setArray(2)} style={{color: array == 2 ? '#CD553F' : '#999'}}
                          className={"textBtn"}>Bestseller</span>
                    <span onClick={() => setArray(3)} style={{color: array == 3 ? '#CD553F' : '#999'}}
                          className={"textBtn"}>Latest</span>
                </div>
            </div>

            <div className={"arrayDiv"}>
                {array == 1 && arrayFeatured.map((item, k) => (
                    <Link to={"/Product"} style={{textDecoration: 'none', color: '#000'}}>
                        <div key={k} className={"itemDiv"}>
                            <Dialog maxWidth={"100%"} onClose={handleClose} open={open}>
                                <Modal name={name} price={price} img={img}/>
                            </Dialog>

                            <Dialog
                                open={openMessage}
                                onClose={() => setOpenMessage(false)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <SuccessMessage name={name} btnPressed={btnPressed}/>
                            </Dialog>

                            <div className={"itemImg"}>
                                <div style={{display: item.sale ? 'flex' : 'none'}} className={"saleText"}>Sale!</div>
                                <img src={item.img} className={"img"}/>
                                <div className={"rowBtnHidden"}>

                                    <Tooltip arrow title="Add to cart" placement="top">
                                        <div onMouseOver={() => setHover1(true)}
                                             onMouseOut={() => setHover1(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'cart')}
                                        >
                                            <Icon1 fill={hover1 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Quickview" placement="top">
                                        <div onMouseOver={() => setHover2(true)}
                                             onMouseOut={() => setHover2(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpen(item.name, item.price, item.img)}
                                        >
                                            <Icon2 fill={hover2 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Wish List" placement="top">
                                        <div onMouseOver={() => setHover3(true)}
                                             onMouseOut={() => setHover3(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'wish')}
                                        >
                                            <Icon3 fill={hover3 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Compare this Product" placement="top">
                                        <div onMouseOver={() => setHover4(true)}
                                             onMouseOut={() => setHover4(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'compare')}
                                        >
                                            <Icon4 fill={hover4 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}

                {array == 2 && arrayBestseller.map((item, k) => (
                    <Link to={"/Product"} style={{textDecoration: 'none', color: '#000'}}>
                        <div className={"itemDiv"}>
                            <Dialog maxWidth={"100%"} onClose={handleClose} open={open}>
                                <Modal name={name} price={price} img={img}/>
                            </Dialog>

                            <Dialog
                                open={openMessage}
                                onClose={() => setOpenMessage(false)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <SuccessMessage name={name} btnPressed={btnPressed}/>
                            </Dialog>

                            <div className={"itemImg"}>
                                <div style={{display: item.sale ? 'flex' : 'none'}} className={"saleText"}>Sale!</div>
                                <img src={item.img} className={"img"}/>

                                <div className={"rowBtnHidden"}>
                                    <Tooltip arrow title="Add to cart" placement="top">
                                        <div onMouseOver={() => setHover1(true)}
                                             onMouseOut={() => setHover1(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'cart')}
                                        >
                                            <Icon1 fill={hover1 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Quickview" placement="top">
                                        <div onMouseOver={() => setHover2(true)}
                                             onMouseOut={() => setHover2(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpen(item.name, item.price, item.img)}
                                        >
                                            <Icon2 fill={hover2 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Wish List" placement="top">
                                        <div onMouseOver={() => setHover3(true)}
                                             onMouseOut={() => setHover3(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'wish')}
                                        >
                                            <Icon3 fill={hover3 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Compare this Product" placement="top">
                                        <div onMouseOver={() => setHover4(true)}
                                             onMouseOut={() => setHover4(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'compare')}
                                        >
                                            <Icon4 fill={hover4 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))
                }

                {array == 3 && arrayLatest.map((item, k) => (
                    <Link to={"/Product"} style={{textDecoration: 'none', color: '#000'}}>
                        <div className={"itemDiv"}>
                            <Dialog maxWidth={"100%"} onClose={handleClose} open={open}>
                                <Modal name={name} price={price} img={img}/>
                            </Dialog>

                            <Dialog
                                open={openMessage}
                                onClose={() => setOpenMessage(false)}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <SuccessMessage name={name} btnPressed={btnPressed}/>
                            </Dialog>

                            <div className={"itemImg"}>
                                <div style={{display: item.sale ? 'flex' : 'none'}} className={"saleText"}>Sale!</div>
                                <img src={item.img} className={"img"}/>

                                <div className={"rowBtnHidden"}>
                                    <Tooltip arrow title="Add to cart" placement="top">
                                        <div onMouseOver={() => setHover1(true)}
                                             onMouseOut={() => setHover1(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'cart')}
                                        >
                                            <Icon1 fill={hover1 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Quickview" placement="top">
                                        <div onMouseOver={() => setHover2(true)}
                                             onMouseOut={() => setHover2(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpen(item.name, item.price, item.img)}
                                        >
                                            <Icon2 fill={hover2 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Wish List" placement="top">
                                        <div onMouseOver={() => setHover3(true)}
                                             onMouseOut={() => setHover3(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'wish')}
                                        >
                                            <Icon3 fill={hover3 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>

                                    <Tooltip arrow title="Compare this Product" placement="top">
                                        <div onMouseOver={() => setHover4(true)}
                                             onMouseOut={() => setHover4(false)}
                                             className={"btnHidden"}
                                             onClick={() => handleClickOpenMessage(item.name, 'compare')}
                                        >
                                            <Icon4 fill={hover4 ? '#fff' : '#000'}/>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}