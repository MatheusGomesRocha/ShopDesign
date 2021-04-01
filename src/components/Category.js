/**
 COMPONENT COM CATEGORIAS PARA SEPARAR OS PRODUTOS (FICA NA TELA HOME ABAIXO DE HEADER)
 */
import './Category.css';

import React, {useState} from "react";
import ScrollContainer from 'react-indiana-drag-scroll'
import {Link} from "react-router-dom";

import LampIcon from '../svg/lamp';
import ShirtIcon from '../svg/shirts';
import ShoeIcon from '../svg/shoes';
import CameraIcon from '../svg/camera';
import GlassIcon from '../svg/oculos';
import CouchIcon from '../svg/sofa';
import BagIcon from '../svg/shopping-bag';
import WatchIcon from '../svg/watch';

export default () => {
    const [hoverItem, setHoverItem] = useState(false);
    const [hoverItem2, setHoverItem2] = useState(false);
    const [hoverItem3, setHoverItem3] = useState(false);
    const [hoverItem4, setHoverItem4] = useState(false);
    const [hoverItem5, setHoverItem5] = useState(false);
    const [hoverItem6, setHoverItem6] = useState(false);
    const [hoverItem7, setHoverItem7] = useState(false);
    const [hoverItem8, setHoverItem8] = useState(false);

    let array = [
        {id: 1, text: 'jodhpur pants', Icon: LampIcon, hover: hoverItem, setHover: setHoverItem},
        {id: 2, text: 'mens wear', Icon: ShirtIcon, hover: hoverItem2, setHover: setHoverItem2},
        {id: 3, text: 'ice skates', Icon: ShoeIcon, hover: hoverItem3, setHover: setHoverItem3},
        {id: 4, text: 'dungarees', Icon: CameraIcon, hover: hoverItem4, setHover: setHoverItem4},
        {id: 5, text: 'jodhpur pants', Icon: GlassIcon, hover: hoverItem5, setHover: setHoverItem5},
        {id: 6, text: 'stirrup pants', Icon: CouchIcon, hover: hoverItem6, setHover: setHoverItem6},
        {id: 7, text: 'footwear', Icon: BagIcon, hover: hoverItem7, setHover: setHoverItem7},
        {id: 8, text: 'punk pants', Icon: WatchIcon, hover: hoverItem8, setHover: setHoverItem8},
    ]

    return (
        <div className={"category"}>
            <span className={"title"}>Our Category</span>
            <div className={"arrayDiv"}>
                <ScrollContainer style={{display: 'flex'}} className="scroll-container">
                    {array.map((item, k) => (
                        <Link to={"/All_products"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                            <div className={"itemDiv"}>
                                <div className={"itemDashed"} onMouseOver={() => item.setHover(true)}
                                     onMouseOut={() => item.setHover(false)}>
                                    <div className={"itemBall"}>
                                        <item.Icon fill={item.hover ? '#fff' : '#999'}/>
                                    </div>
                                </div>
                                <span className={"text"}>{item.text}</span>
                            </div>
                        </Link>
                    ))}
                </ScrollContainer>
            </div>
        </div>
    )
}