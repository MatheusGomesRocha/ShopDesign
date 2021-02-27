import React, {useState} from "react";
import './Product.css';
import MinusIcon from "../svg/minus";
import PlusIcon from "../svg/plus";
import HeartIcon from "../svg/heart";
import AdjustIcon from "../svg/adjust";

import Img from '../img/img1.png';

import Dialog from "@material-ui/core/Dialog";
import SuccessMessage from "../sideComponents/SuccessMessage";

export default () => {
    const [quantidade, setQuantidade] = useState(1);
    const [openMessage, setOpenMessage] = useState(false);
    const [btnPressed, setBtnPressed] = useState(false);
    const [name, setName] = useState('');

    const handleLess = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }
    const handleMore = () => {
        setQuantidade(quantidade + 1);
    }

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

    return (
        <div className={"product"}>
            <Dialog
                open={openMessage}
                onClose={() => setOpenMessage(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <SuccessMessage name={name} btnPressed={btnPressed}/>
            </Dialog>

            <div className={"imgDiv"}>
                <img className={"img"} src={Img}/>
            </div>

            <div className={"rightDiv"}>
                <span className={"name"}>Crepe Checkered Salwar Suit Material (Unstitched)</span>

                <div className={"line"}></div>

                <div className={"top"}>
                    <div className={"infoDiv"}>
                        <span>Brand:</span>
                        <span style={{color: '#CD553F'}} className={"rightSpan"}>Apple</span>
                    </div>
                    <div className={"infoDiv"}>
                        <span>Product Code:</span>
                        <span className={"rightSpan"}>Product 16</span>
                    </div>
                    <div className={"infoDiv"}>
                        <span>Reward Points:</span>
                        <span className={"rightSpan"}>600</span>
                    </div>
                    <div className={"infoDiv"}>
                        <span>Availability:</span>
                        <span className={"rightSpan"}>In Stock</span>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"divPrice"}>
                    <span className={"price"}>R$ 195,05</span>
                    <span style={{marginTop: 10, fontSize: 18}}>Price In Reward Points: 350</span>
                </div>

                <div className={"line"}></div>

                <div className={"qtdDiv"}>
                    <span>Quantidade:</span>
                    <div className={"btns"}>
                        <div style={{backgroundColor: quantidade === 1 ? '#ccc' : 'transparent'}} onClick={handleLess}
                             className={"less"}>
                            <MinusIcon/>
                        </div>
                        <input className={"input"} value={quantidade}/>
                        <div onClick={handleMore} className={"more"}>
                            <PlusIcon/>
                        </div>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"bottomDiv"}>
                    <div className={"largeBtn"}
                         onClick={() => handleClickOpenMessage('Crepe Checkered Salwar Suit Material (Unstitched)', 'cart')}>
                        <span>Add To Cart</span>
                    </div>

                    <div className={"smallBtn"}
                         onClick={() => handleClickOpenMessage('Crepe Checkered Salwar Suit Material (Unstitched)', 'wish')}>
                        <HeartIcon fill={"#fff"}/>
                    </div>
                    <div className={"smallBtn"}
                         onClick={() => handleClickOpenMessage('Crepe Checkered Salwar Suit Material (Unstitched)', 'compare')}>
                        <AdjustIcon fill={"#fff"}/>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"reviewRow"}>
                    <div className={"reviewRowDiv"}>
                        A A A A A
                    </div>

                    <div className={"lineVertical"}></div>

                    <div className={"reviewRowDiv"}>
                        <span>0 Reviews</span>
                    </div>

                    <div className={"lineVertical"}></div>

                    <div className={"reviewRowDiv"}>
                        <span>Write A Review</span>
                    </div>
                </div>

                <div className={"line"}></div>

            </div>
        </div>
    )
}