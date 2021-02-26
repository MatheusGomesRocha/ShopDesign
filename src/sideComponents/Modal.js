import {useEffect, useState} from "react";
import './Modal.css';

import HeartIcon from '../svg/heart';
import AdjustIcon from '../svg/adjust';
import MinusIcon from '../svg/minus';
import PlusIcon from '../svg/plus';

export default (props) => {
    const [quantidade, setQuantidade] = useState(1);

    const handleLess = () => {
        if(quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    const handleMore = () => {
        setQuantidade(quantidade + 1);
    }

    return(
        <div className={"modal"}>
            <div className={"imgDiv"}>
                <img className={"img"} src={props.img} />
            </div>

            <div className={"rightDiv"}>
                <span className={"name"}>{props.name}</span>

                <div className={"top"}>
                    <div className={"infoDiv"}>
                        <span>Brand:</span>
                        <span className={"rightSpan"}>Apple</span>
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

                <div className={"center"}>
                    <span className={"price"}>R$ {props.price}</span>
                </div>

                <div className={"line"}></div>

                <div className={"qtdDiv"}>
                    <span>Quantidade:</span>
                    <div className={"btns"}>
                        <div style={{backgroundColor: quantidade === 1 ? '#ccc' : 'transparent'}} onClick={handleLess} className={"less"}>
                            <MinusIcon />
                        </div>
                        <input className={"input"} value={quantidade}/>
                        <div onClick={handleMore} className={"more"}>
                            <PlusIcon />
                        </div>
                    </div>
                </div>

                <div className={"line"}></div>

                <div className={"bottomDiv"}>
                    <div className={"largeBtn"}>
                        <span>Add To Cart</span>
                    </div>

                    <div className={"smallBtn"}>
                        <HeartIcon fill={"#fff"} />
                    </div>
                    <div className={"smallBtn"}>
                        <AdjustIcon fill={"#fff"} />
                    </div>
                </div>
            </div>
        </div>
    )
}