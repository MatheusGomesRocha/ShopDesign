import React, {useState} from "react";
import './Daily.css';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";

import Tooltip from "@material-ui/core/Tooltip";
import Icon1 from "../svg/shopping-cart";
import Icon2 from "../svg/open-window";
import Icon3 from "../svg/heart";
import Icon4 from "../svg/adjust";
import Countdown from 'react-countdown';

import Modal from '../sideComponents/Modal.js'
import Dialog from "@material-ui/core/Dialog";
import SuccessMessage from "../sideComponents/SuccessMessage";

import {Link} from 'react-router-dom';

export default () => {
    const [open, setOpen] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);

    const [btnPressed, setBtnPressed] = useState(false);

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

    let array = [
        {id: 1, img: img1, timer: 500000000, sale: true, name: 'Printed Women Kurti (Multicolor)', price: '602,00'},
        {
            id: 2,
            img: img2,
            timer: 401200411,
            sale: false,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
        {
            id: 3,
            img: img3,
            timer: 448720256,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 4,
            img: img4,
            timer: 214138761,
            sale: false,
            name: 'Embroidered Satin Blend Stitched Anarkali',
            price: '170,99'
        },
    ];

    const renderer = ({days, hours, minutes, seconds}) => {
        return <span className={"countdownTime"}>{days}:{hours}:{minutes}:{seconds}</span>;
    };

    return (
        <div className={"daily"}>
            <div className={"topText"}>
                <span className={"title"}>Daily Of The Day</span>
            </div>

            <div className={"arrayDiv"}>
                {array.map((item, k) => (
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
                            <div className={"countdownHidden"}>
                                <Countdown
                                    date={Date.now() + item.timer}
                                    renderer={renderer}
                                />
                            </div>

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

                        <Link to={"/Product"} style={{textDecoration: 'none', color: '#000'}}>
                            <div className={"itemText"}>
                                <span className={"name"}>{item.name}</span>
                                <span className={"price"}>R$ {item.price}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}