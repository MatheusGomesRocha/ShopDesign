/**
    TELA COM AS INFORMAÇÕES DO PRODUTO SELECIONADO (ACESSADA AO CLICAR NO TITULO DO PRODUTO NA TELA HOME)
 */
import './Product.css';

import React, {useState} from "react";
import MinusIcon from "../svg/minus";
import PlusIcon from "../svg/plus";
import HeartIcon from "../svg/heart";
import AdjustIcon from "../svg/adjust";
import StarFullIcon from '../svg/star_full';
import StarEmptyIcon from '../svg/star_empty';

import Img from '../img/img1.png';

import Dialog from "@material-ui/core/Dialog";
import SuccessMessage from "../sideComponents/SuccessMessage";

let arrayFeatures = [
    {id: 1, text: 'Processor Qualcomm® MSM 7201A™ 528 MHz'},
    {id: 2, text: 'Windows Mobile® 6.1 Professional Operating System'},
    {id: 3, text: 'Memory: 512 MB ROM, 288 MB RAM'},
    {id: 4, text: 'Built-in 3.5 mm audio jack, microphone, speaker, and FM radio'},
    {id: 5, text: 'Special Features: FM Radio, G-Sensor'},
    {id: 6, text: '5 megapixel color camera with auto focus'},
    {id: 7, text: 'VGA CMOS color camera'},
    {id: 8, text: 'HTC ExtUSB™ (11-pin mini-USB 2.0)'},
    {id: 9, text: '40 polyphonic and standard MIDI format 0 and 1 (SMF)/SP MIDI'},
    {id: 10, text: 'Rechargeable Lithium-ion or Lithium-ion polymer 1350 mAh battery'},
    {id: 11, text: 'Wi-Fi®: IEEE 802.11 b/g'},
    {id: 12, text: 'Expansion Slot: microSD™ memory card (SD 2.0 compatible)'},
    {id: 13, text: 'Dimensions: 115 mm x 62.8 mm x 12 mm / 146.4 grams'},
]

export default () => {
    const [quantidade, setQuantidade] = useState(1);
    const [openMessage, setOpenMessage] = useState(false);
    const [btnPressed, setBtnPressed] = useState(false);
    const [name, setName] = useState('');

    const [isReview, setIsReview] = useState(false);

    const [star1, setStar1] = useState(false);
    const [star2, setStar2] = useState(false);
    const [star3, setStar3] = useState(false);
    const [star4, setStar4] = useState(false);
    const [star5, setStar5] = useState(false);

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

    const handleOverRating = (value) => {
        if (value == 1) {
            setStar1(true);
            setStar2(false);
            setStar3(false);
            setStar4(false);
            setStar5(false);
        } else if (value == 2) {
            setStar1(true);
            setStar2(true);
            setStar3(false);
            setStar4(false);
            setStar5(false);
        } else if (value == 3) {
            setStar1(true);
            setStar2(true);
            setStar3(true);
            setStar4(false);
            setStar5(false);
        } else if (value == 4) {
            setStar1(true);
            setStar2(true);
            setStar3(true);
            setStar4(true);
            setStar5(false);
        } else if (value == 5) {
            setStar1(true);
            setStar2(true);
            setStar3(true);
            setStar4(true);
            setStar5(true);
        } else if (value == 0) {
            setStar1(false);
            setStar2(false);
            setStar3(false);
            setStar4(false);
            setStar5(false);
        }
    }

    const ProductInfoComponent = () => {
        return(
            <div className={"productInfo"}>
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
                            <div style={{backgroundColor: quantidade === 1 ? '#ccc' : 'transparent'}}
                                 onClick={handleLess}
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
                            <StarFullIcon/>
                            <StarFullIcon/>
                            <StarFullIcon/>
                            <StarEmptyIcon/>
                            <StarEmptyIcon/>
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

    return (
        <div className={"product"}>

            <ProductInfoComponent />

            <div className={"review"}>
                {isReview == false ?    /* Se isReview for FALSE, retorna a tela de features do produto (infos) */
                    <div className={"productFeatures"}>

                        <div className={"top"}>
                            <div onClick={() => setIsReview(false)}
                                 style={{
                                     color: isReview ? '#000' : '#CD553F',
                                     borderBottom: isReview ? '3px solid transparent' : '3px solid #CD553F'
                                 }}
                                 className={"btnChange"}
                            >
                                Description
                            </div>
                            <div onClick={() => setIsReview(true)}
                                 style={{
                                     color: isReview ? '#CD553F' : '#000',
                                     borderBottom: isReview ? '3px solid #CD553F' : '3px solid transparent'
                                 }}
                                 className={"btnChange"}
                            >
                                Reviews (0)
                            </div>
                        </div>

                        <div className={"descriptionDiv"}>
                            <span className={"description"}>
                                HTC Touch - in High Definition. Watch music videos and streaming content in awe-inspiring high
                                definition clarity for a mobile experience you never thought possible. Seductively sleek, the HTC
                                Touch HD provides the next generation of mobile functionality, all at a simple touch. Fully
                                integrated with Windows Mobile Professional 6.1, ultrafast 3.5G, GPS, 5MP camera, plus lots more -
                                all delivered on a breathtakingly crisp 3.8" WVGA touchscreen - you can take control of your mobile
                                world with the HTC Touch HD.
                            </span>
                        </div>

                        <div className={"featuresDiv"}>
                            <span className={"title"}>Features</span>
                            <div className={"featuresText"}>
                                {arrayFeatures.map((item, k) => (
                                    <div className={"featuresRow"}>
                                        <div className={"smallBall"}></div>
                                        <span style={{fontSize: 18}}>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    :  /* Se isReview for TRUE, retorna a tela com o formulário para adicionar uma review ao produto */

                    <div className={"reviewForm"}>
                        <div className={"top"}>
                            <div onClick={() => setIsReview(false)}
                                 style={{
                                     color: isReview ? '#000' : '#CD553F',
                                     borderBottom: isReview ? '3px solid transparent' : '3px solid #CD553F'
                                 }}
                                 className={"btnChange"}
                            >
                                Description
                            </div>
                            <div onClick={() => setIsReview(true)}
                                 style={{
                                     color: isReview ? '#CD553F' : '#000',
                                     borderBottom: isReview ? '3px solid #CD553F' : '3px solid transparent'
                                 }}
                                 className={"btnChange"}
                            >
                                Reviews (0)
                            </div>
                        </div>

                        <div className={"divTop"}>
                            There are no reviews for this product.
                        </div>

                        <span className={"title"}>Write a Review</span>

                        <div className={"divInput"}>
                            <label className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span> Your
                                Name</label>
                            <input type={"text"} className={"input"}/>
                        </div>

                        <div className={"divInput"}>
                            <label className={"label"}><span style={{color: 'red', marginRight: 5}}>*</span> Your Review</label>
                            <textarea className={"bigInput"}/>
                        </div>

                        <div className={"rating"}>
                            <span><span style={{color: 'red', marginRight: 5}}>*</span> Rating</span>
                            <div onMouseOver={() => handleOverRating(1)} onMouseOut={() => handleOverRating(0)}>
                                <StarFullIcon width={"20px"} height={"20px"} fill={star1 ? '#cd553f' : '#ccc'}/>
                            </div>

                            <div onMouseOver={() => handleOverRating(2)} onMouseOut={() => handleOverRating(0)}>
                                <StarFullIcon width={"20px"} height={"20px"} fill={star2 ? '#cd553f' : '#ccc'}/>
                            </div>

                            <div onMouseOver={() => handleOverRating(3)} onMouseOut={() => handleOverRating(0)}>
                                <StarFullIcon width={"20px"} height={"20px"} fill={star3 ? '#cd553f' : '#ccc'}/>
                            </div>

                            <div onMouseOver={() => handleOverRating(4)} onMouseOut={() => handleOverRating(0)}>
                                <StarFullIcon width={"20px"} height={"20px"} fill={star4 ? '#cd553f' : '#ccc'}/>
                            </div>

                            <div onMouseOver={() => handleOverRating(5)} onMouseOut={() => handleOverRating(0)}>
                                <StarFullIcon width={"20px"} height={"20px"} fill={star5 ? '#cd553f' : '#ccc'}/>
                            </div>
                        </div>

                        <span className={"title"}>Captcha</span>

                        <div style={{margin: 20, width: 'auto'}} className={"line"}></div>

                        <div className={"divInput"}>
                            <span><span style={{color: 'red', marginRight: 5}}>*</span>Enter the code in the box</span>
                            <input type={"text"} className={"input"}/>
                        </div>
                    </div>

                }

            </div>
        </div>
    )
}