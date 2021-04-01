/**
 TELA ONDE FICAM TODOS OS PRODUTOS PARA VISUALIZAÇÃO (ACESSADA PELOS BOTÕES NO COMPONENT CATEGORY)
 */

import './AllProducts.css';

import React, {useState} from 'react';
import PathComponent from '../sideComponents/Path';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img13 from "../img/img13.png";
import img10 from "../img/img10.png";
import img12 from "../img/img12.png";
import img11 from "../img/img11.png";
import img9 from "../img/img9.png";
import Dialog from "@material-ui/core/Dialog";
import Modal from "../sideComponents/Modal";
import SuccessMessage from "../sideComponents/SuccessMessage";
import Tooltip from "@material-ui/core/Tooltip";
import Icon1 from "../svg/shopping-cart";
import Icon2 from "../svg/open-window";
import Icon3 from "../svg/heart";
import Icon4 from "../svg/adjust";
import ListIcon from '../svg/list';
import GridIcon from '../svg/menu-grid';
import {Link} from "react-router-dom";

export default () => {
    let array = [
        {
            id: 1,
            category: 'Headgear',
            subCategory1: 'Haute Couture',
            subCategory2: 'Knee Clothing',
            subCategory3: 'Printers',
            quantity: '11'
        },
        {
            id: 2, category: 'Mens Wear', subCategory1: 'Skirts', subCategory2: 'Womens Wear', quantity: '11'
        },
        {id: 3, category: 'Ice Skates', subCategory1: 'PC', subCategory2: 'Aprons', quantity: '8'},
        {id: 4, category: 'Dungarees', quantity: '8'},
        {id: 5, category: 'Jodhpur Pants', quantity: '8'},
        {id: 6, category: 'Stirrup Pants', quantity: '8'},
        {id: 7, category: 'Footwear', quantity: '8'},
        {id: 8, category: 'Punk Pants', quantity: '8'},
    ];

    let arrayDefault = [
        {
            id: 1,
            category: 'Headgear',
            subCategory: 'Knee Clothing',
            img: img1,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00',
        },
        {
            id: 2,
            category: 'Headgear',
            subCategory: 'Haute Couture',
            img: img2,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
        {
            id: 3,
            category: 'Headgear',
            subCategory: 'Knee Clothing',
            img: img3,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 4,
            category: 'Headgear',
            subCategory: 'Printers',
            img: img4,
            sale: true,
            name: 'Embroidered Satin Blend Stitched Anarkali',
            price: '170,99'
        },
        {
            id: 5,
            category: 'Headgear',
            subCategory: 'Printers',
            img: img5,
            name: 'Canvas Slip On Sneakers For Women',
            price: '231,50'
        },
        {
            id: 6,
            category: 'Headgear',
            subCategory: 'Haute Couture',
            img: img6,
            name: 'Date Unique New Analog Watch - For Men',
            price: '80,00'
        },

        {
            id: 8,
            category: 'Mens Wear',
            subCategory: 'Skirts',
            img: img2,
            name: 'Applique Satin Blend Semi Stitched Anarkali Gown',
            price: '348,12'
        },
        {
            id: 4,
            category: 'Mens Wear',
            subCategory: 'Womens Wear',
            img: img7,
            name: 'Embroidered Satin Blend Stitched Anarkali',
            price: '170,99'
        },
        {
            id: 7,
            category: 'Mens Wear',
            subCategory: 'Skirts',
            img: img13,
            sale: true,
            name: 'Embroidered Orange Women Dupatta',
            price: '57,05'
        },
        {
            id: 2,
            category: 'Mens Wear',
            subCategory: 'Womens Wear',
            img: img12,
            sale: true,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
        {
            id: 1,
            category: 'Mens Wear',
            subCategory: 'Skirts',
            img: img5,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 3,
            category: 'Mens Wear',
            subCategory: 'Skirts',
            img: img10,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 3,
            category: 'Dungarees',
            img: img1,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 1,
            category: 'Dungarees',
            img: img8,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 5,
            category: 'Dungarees',
            img: img4,
            sale: true,
            name: 'Canvas Slip On Sneakers For Women',
            price: '231,50'
        },
        {
            id: 3,
            category: 'Ice Skates',
            subCategory: 'PC',
            img: img1,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 1,
            category: 'Ice Skates',
            subCategory: 'PC',
            img: img8,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 5,
            category: 'Ice Skates',
            subCategory: 'Aprons',
            img: img4,
            sale: true,
            name: 'Canvas Slip On Sneakers For Women',
            price: '231,50'
        },
        {
            id: 8,
            category: 'Ice Skates',
            subCategory: 'PC',
            img: img5,
            name: 'Applique Satin Blend Semi Stitched Anarkali Gown',
            price: '348,12'
        },
        {
            id: 2,
            category: 'Ice Skates',
            subCategory: 'Aprons',
            img: img11,
            sale: true,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
        {
            id: 4,
            category: 'Ice Skates',
            subCategory: 'Aprons',
            img: img9,
            name: 'Embroidered Satin Blend Stitched Anarkali',
            price: '170,99'
        },
        {
            id: 1,
            category: 'Jodhpur Pants',
            img: img1,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 2,
            category: 'Jodhpur Pants',
            img: img2,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
        {
            id: 3,
            category: 'Stirrup Pants',
            img: img1,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 1,
            category: 'Stirrup Pants',
            img: img8,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 5,
            category: 'Stirrup Pants',
            img: img4,
            sale: true,
            name: 'Canvas Slip On Sneakers For Women',
            price: '231,50'
        },
        {
            id: 3,
            category: 'Stirrup Pants',
            img: img1,
            sale: true,
            name: 'Net Embroidered Gown/Anarkali Kurta & Bottom Material',
            price: '125,80'
        },
        {
            id: 1,
            category: 'Footwear',
            img: img8,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 5,
            category: 'Footwear',
            img: img4,
            sale: true,
            name: 'Canvas Slip On Sneakers For Women',
            price: '231,50'
        },
        {
            id: 8,
            category: 'Footwear',
            img: img5,
            name: 'Applique Satin Blend Semi Stitched Anarkali Gown',
            price: '348,12'
        },
        {
            id: 2,
            category: 'Footwear',
            img: img11,
            sale: true,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
        {
            id: 4,
            category: 'Footwear',
            img: img9,
            name: 'Embroidered Satin Blend Stitched Anarkali',
            price: '170,99'
        },
        {
            id: 1,
            category: 'Punk Pants',
            img: img1,
            sale: true,
            name: 'Printed Women Kurti (Multicolor)',
            price: '602,00'
        },
        {
            id: 2,
            category: 'Punk Pants',
            img: img2,
            name: 'Crepe Checkered Salwar Suit Material (Unstitched)',
            price: '120,99'
        },
    ];

    let arrayCategory = [
        {id: 1, category: 'Headgear', subCategory: 'Haute Couture', quantity: '11'},
        {id: 2, category: 'Headgear', subCategory: 'Knee Clothing', quantity: '3'},
        {id: 3, category: 'Headgear', subCategory: 'Printers', quantity: '5'},
        {id: 4, category: 'Mens Wear', subCategory: 'Skirts', quantity: '7'},
        {id: 5, category: 'Mens Wear', subCategory: 'Womens Wear', quantity: '18'},
        {id: 6, category: 'Ice Skates', subCategory: 'PC', quantity: '11'},
        {id: 7, category: 'Ice Skates', subCategory: 'Aprons', quantity: '9'},
    ]

    const [category, setCategory] = useState('Headgear');
    const [subCategory, setSubCategory] = useState();

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

    const [showProductsOn, setShowProductsOn] = useState('Grid');

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

    const handleCategory = (v) => {
        setCategory(v);
        setSubCategory(null)
    }


    return (
        <div className={"allProducts"}>
            <PathComponent allProducts={true} category={category} subCategory={subCategory}/>

            <div className={"mainDiv"}>

                <div className={"side"}>
                    <div className={"topDiv"}>
                        <span className={"categoryTitle"}>Category</span>
                    </div>

                    <div className={"mainCategory"}>
                        {array.map((item, k) => (
                            <div className={"itemCategory"}>
                                <div onClick={() => handleCategory(item.category)} className={"categoryDiv"}>
                                    <span
                                        style={{
                                            color: item.category == category && '#CD553F'
                                        }}
                                        className={"text"}>{item.category} ({item.quantity})</span>
                                </div>

                                <div className={"subCategory"}
                                     style={{display: category == item.category ? 'flex' : 'none'}}>
                                    {item.subCategory1 &&
                                    <>
                                        <div onClick={() => setSubCategory(item.subCategory1)}
                                             className={"subCategoryItem"}>
                                            <span
                                                style={{
                                                    color: item.subCategory1 == subCategory && '#CD553F'
                                                }}
                                                className={"subCategoryText"}>- {item.subCategory1} ({item.quantity})</span>
                                        </div>
                                        <div onClick={() => setSubCategory(item.subCategory2)}
                                             className={"subCategoryItem"}>
                                            <span
                                                style={{
                                                    color: item.subCategory2 == subCategory && '#CD553F'
                                                }}
                                                className={"subCategoryText"}>- {item.subCategory2} ({item.quantity})</span>
                                        </div>

                                        {item.subCategory3 &&
                                        <div onClick={() => setSubCategory(item.subCategory3)}
                                             className={"subCategoryItem"}>
                                            <span
                                                style={{
                                                    color: item.subCategory3 == subCategory && '#CD553F'
                                                }}
                                                className={"subCategoryText"}>- {item.subCategory3} ({item.quantity})</span>
                                        </div>
                                        }
                                    </>
                                    }
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

                <div className={"side"}>
                    <div className={"topInfo"}>
                        <span className={"topCategory"}>{category}</span>
                        <span className={"topInfoCategory"}>
                            Shop Laptop Feature Only The Best Laptop Deals On The Market. By Comparing Laptop
                            Deals From The Likes Of PC World, Comet, Dixons, The Link And Carphone Warehouse,
                            Shop Laptop Has The Most Comprehensive Selection Of Laptops On The Internet. At
                            Shop Laptop, We Pride Ourselves On Offering Customers The Very Best Laptop Deals.
                            From Refurbished Laptops To Netbooks, Shop Laptop Ensures That Every Laptop -
                            In Every Colour, Style, Size And Technical Spec - Is Featured On The Site At The
                            Lowest Possible Price.
                        </span>
                    </div>

                    {/*      */}

                    <div className={"refineSearch"}>
                        <span className={"refineSearchTitle"}>Refine Search</span>

                        <div style={{display: 'flex'}}>
                            {arrayCategory.map((item, k) => (
                                category == item.category &&
                                <div className={"refineSearchItem"} onClick={() => setSubCategory(item.subCategory)}>
                                    <span
                                        className={"refineSearchSubCategory"}>{item.subCategory} ({item.quantity})</span>
                                </div>
                            ))}
                        </div>

                        <div className={"rowOptions"}>
                            <div className={"optionsIcon"}>
                                <Tooltip arrow title="List" placement="top">
                                    <div onClick={() => setShowProductsOn('List')}>
                                        <ListIcon fill={showProductsOn == 'List' ? '#CD553F' : '#ccc'}/>
                                    </div>
                                </Tooltip>

                                <Tooltip arrow title="Grid" placement="top">
                                    <div style={{marginLeft: 15}} onClick={() => setShowProductsOn('Grid')}>
                                        <GridIcon fill={showProductsOn == 'Grid' ? '#CD553F' : '#ccc'}/>
                                    </div>
                                </Tooltip>
                            </div>

                            <span className={"text"}>Product Compare (0)</span>

                            <div className={"sortAndShowDiv"}>
                                <span className={"label"}>Sort By: </span>

                                <select className={"select"}>
                                    <option>Default</option>
                                    <option>Name (A-Z)</option>
                                    <option>Name (Z-A)</option>
                                    <option>Price (Low > High)</option>
                                    <option>Price (High > Low)</option>
                                    <option>Rating (Highest)</option>
                                    <option>Rating (Lowest)</option>
                                    <option>Model (A-A)</option>
                                    <option>Model (Z-A)</option>
                                </select>

                                <span className={"label"}>Show: </span>

                                <select className={"select"}>
                                    <option>15</option>
                                    <option>25</option>
                                    <option>50</option>
                                    <option>75</option>
                                    <option>100</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/*      */}

                    <div className={"arrayProducts"}>
                        <>
                            {arrayDefault.map((item, k) => (
                                category == item.category &&
                                subCategory != null ?
                                    subCategory == item.subCategory &&
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
                                            <div style={{display: item.sale ? 'flex' : 'none'}}
                                                 className={"saleText"}>Sale!
                                            </div>
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

                                    :

                                    category == item.category &&
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
                                            <div style={{display: item.sale ? 'flex' : 'none'}}
                                                 className={"saleText"}>Sale!
                                            </div>
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

                                        <Link to={"/Product"} style={{textDecoration: 'none', color: '#000'}}>
                                            <div className={"itemText"}>
                                                <span className={"name"}>{item.name}</span>
                                                <span className={"price"}>R$ {item.price}</span>
                                            </div>
                                        </Link>
                                    </div>
                            ))}
                        </>


                    </div>
                </div>
            </div>
        </div>
    )
}