/**
 COMPONENT HEADER (TOP E BOTTOM FICA NA TELA HOME, NAS TELAS RESTANTES, CHAMO APENAS O TOP)
 É O PRIMEIRO COMPONENT DA TELA COM O TOP FIXADO AO SCROLLAR
 */

import './Header.css';

import React, {useState, useEffect} from "react";
import UserIcon from '../svg/user';
import HeartIcon from '../svg/heart';
import BasketIcon from '../svg/shopping-basket';
import MenuCircleIcon from '../svg/menu-circle';

import {Button, Menu, MenuItem} from "@material-ui/core";
import DefaultBtnComponent from '../sideComponents/DefaultBtn';

export default () => {
    const [header, setHeader] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);

    const [hoverLink1, setHoverLink1] = useState(false)
    const [hoverLink2, setHoverLink2] = useState(false)
    const [hoverLink3, setHoverLink3] = useState(false)
    const [hoverLink4, setHoverLink4] = useState(false)
    const [hoverLink5, setHoverLink5] = useState(false)

    const [showSubLink1, setShowSubLink1] = useState(false);
    const [showSubLink2, setShowSubLink2] = useState(false);
    const [showSubLink3, setShowSubLink3] = useState(false);
    const [showSubLink4, setShowSubLink4] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHeader(!header);
        }, 7000)
    }, [header])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <div className={"header"}>
            <div className={"headerTop"}>
                <div className={"headerTopTitle"}>
                    <span className={"headerTitle"}>FEVINO</span>
                </div>


                <div className={"headerTopLeft"}>

                    <div onMouseOver={() => setShowSubLink1(true)}
                         onMouseOut={() => setShowSubLink1(false)}
                         className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Clothes</a>

                        <div
                            onMouseOver={() => setShowSubLink1(true)}
                            onMouseOut={() => setShowSubLink1(false)}
                            style={{display: showSubLink1 ? 'flex' : 'none'}}
                            className={"headerSubLink"}
                        >
                            <div className={"headerSubLinkSide"}>
                                <span className={"headerSubLinkSideTitle"}>Men's Wear (9)</span>

                                <span className={"headerSubLinkSideLink"}>Basic Shirts (5)</span>
                                <span className={"headerSubLinkSideLink"}>Sweatshirt (3)</span>
                                <span className={"headerSubLinkSideLink"}>Pants (3)</span>
                            </div>

                            <div className={"headerSubLinkSide"} style={{marginLeft: 50}}>
                                <span className={"headerSubLinkSideTitle"}>Women's Wear (4)</span>

                                <span className={"headerSubLinkSideLink"}>Skirts (14)</span>
                                <span className={"headerSubLinkSideLink"}>Dresses (7)</span>
                                <span className={"headerSubLinkSideLink"}>Basic Shirts (17)</span>
                            </div>

                            <div className={"headerSubLinkSide"} style={{marginLeft: 50}}>
                                <span className={"headerSubLinkSideTitle"}>Unisex (14)</span>

                                <span className={"headerSubLinkSideLink"}>Shirts (14)</span>
                                <span className={"headerSubLinkSideLink"}>Pants (7)</span>
                                <span className={"headerSubLinkSideLink"}>T-Shirts (17)</span>
                            </div>
                        </div>
                    </div>

                    <div onMouseOver={() => setShowSubLink2(true)}
                         onMouseOut={() => setShowSubLink2(false)}
                         className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Acessories</a>

                        <div
                            onMouseOver={() => setShowSubLink2(true)}
                            onMouseOut={() => setShowSubLink2(false)}
                            style={{display: showSubLink2 ? 'flex' : 'none'}}
                            className={"headerSubLink"}
                        >
                            <div className={"headerSubLinkSide"}>
                                <span className={"headerSubLinkSideTitle"}>Hats (45)</span>

                                <span className={"headerSubLinkSideLink"}>Cowboy (5)</span>
                                <span className={"headerSubLinkSideLink"}>Safari (3)</span>
                                <span className={"headerSubLinkSideLink"}>Top Hat (3)</span>
                            </div>

                            <div className={"headerSubLinkSide"} style={{marginLeft: 50}}>
                                <span className={"headerSubLinkSideTitle"}>Bracelets (34)</span>

                                <span className={"headerSubLinkSideLink"}>Gold (14)</span>
                                <span className={"headerSubLinkSideLink"}>Silver (7)</span>
                                <span className={"headerSubLinkSideLink"}>Diamond (12)</span>
                            </div>

                        </div>
                    </div>

                    <div onMouseOver={() => setShowSubLink3(true)}
                         onMouseOut={() => setShowSubLink3(false)}
                         className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Computer</a>

                        <div
                            onMouseOver={() => setShowSubLink3(true)}
                            onMouseOut={() => setShowSubLink3(false)}
                            style={{display: showSubLink3 ? 'flex' : 'none'}}
                            className={"headerSubLink"}
                        >
                            <div className={"headerSubLinkSide"}>
                                <span className={"headerSubLinkSideTitle"}>Hardware (45)</span>

                                <span className={"headerSubLinkSideLink"}>Memory RAM (5)</span>
                                <span className={"headerSubLinkSideLink"}>SSD (3)</span>
                            </div>

                            <div className={"headerSubLinkSide"} style={{marginLeft: 50}}>
                                <span className={"headerSubLinkSideTitle"}>Notebooks (34)</span>

                                <span className={"headerSubLinkSideLink"}>Positivo (14)</span>
                                <span className={"headerSubLinkSideLink"}>Samsung (7)</span>
                            </div>

                        </div>
                    </div>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Cleaning Tools</a>
                    </div>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Workout Tools</a>
                    </div>

                    <div onMouseOver={() => setShowSubLink4(true)}
                         onMouseOut={() => setShowSubLink4(false)}
                         className={"headerLinkDiv"}>
                        <a className={"headerLink"}>More</a>

                        <div
                            onMouseOver={() => setShowSubLink4(true)}
                            onMouseOut={() => setShowSubLink4(false)}
                            style={{display: showSubLink4 ? 'flex' : 'none'}}
                            className={"headerSubLink"}
                        >
                            <div className={"headerSubLinkSide"}>
                                <span className={"headerSubLinkSideTitle"}>More (45)</span>

                                <span className={"headerSubLinkSideLink"}>Purses (23)</span>
                                <span className={"headerSubLinkSideLink"}>Shoes (75)</span>
                                <span className={"headerSubLinkSideLink"}>Makeup (14)</span>
                            </div>

                        </div>
                    </div>
                </div>


                {/* TOP RIGHT */}

                <div className={"headerTopRight"}>
                    {/*Link 1*/}
                    <div className={"headerTopRightLink"}>
                        <Button onMouseOver={() => setHoverLink1(true)}
                                onMouseOut={() => setHoverLink1(false)}
                                aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick}
                        >
                            <UserIcon fill={hoverLink1 ? '#CD553F' : '#000'} width={"25px"} height={"25px"}/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{marginTop: 50, backgroundColor: 'transparent'}}
                        >
                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose}
                                      onMouseOver={() => setHoverLink2(true)}
                                      onMouseOut={() => setHoverLink2(false)}
                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"15px"} height={"15px"}/>
                                <span style={{marginLeft: 10}}>Register</span>
                            </MenuItem>

                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose}
                                      onMouseOver={() => setHoverLink2(true)}
                                      onMouseOut={() => setHoverLink2(false)}
                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"15px"} height={"15px"}/>
                                <span style={{marginLeft: 10}}>Login</span>
                            </MenuItem>

                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose}
                                      onMouseOver={() => setHoverLink2(true)}
                                      onMouseOut={() => setHoverLink2(false)}
                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"15px"} height={"15px"}/>
                                <span style={{marginLeft: 10}}>Compare</span>
                            </MenuItem>

                        </Menu>
                    </div>


                    {/*Link 2*/}
                    <div className={"headerTopRightLink"}
                         onMouseOver={() => setHoverLink3(true)}
                         onMouseOut={() => setHoverLink3(false)}
                    >
                        <HeartIcon fill={hoverLink3 ? '#CD553F' : '#000'} width={"25px"} height={"25px"}/>
                    </div>


                    {/*Link 3*/}
                    <div className={"headerTopRightLink"}
                         onMouseOver={() => setHoverLink4(true)}
                         onMouseOut={() => setHoverLink4(false)}
                    >
                        <BasketIcon fill={hoverLink4 ? '#CD553F' : '#000'} width={"25px"} height={"25px"}/>
                        <div className={"badge"}>0</div>
                    </div>


                    {/*Link 4*/}
                    <div className={"headerTopRightLink"}>
                        <Button onMouseOver={() => setHoverLink5(true)}
                                onMouseOut={() => setHoverLink5(false)}
                                aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick2}
                        >
                            <MenuCircleIcon fill={hoverLink5 ? '#CD553F' : '#000'} width={"25px"} height={"25px"}/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl2}
                            keepMounted
                            open={Boolean(anchorEl2)}
                            onClose={handleClose2}
                            style={{marginTop: 50, backgroundColor: 'transparent'}}
                        >
                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose2}
                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"20px"} height={"20px"}/>
                                <span style={{marginLeft: 10}}>Currency</span>
                            </MenuItem>

                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose2}

                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"20px"} height={"20px"}/>
                                <span style={{marginLeft: 10}}>Language</span>
                            </MenuItem>

                        </Menu>
                    </div>

                </div>
            </div>

            <div className={"headerBottom"}>
                <div className={"btnCarousel"}>
                    <div style={{backgroundColor: header ? '#CD553F' : '#999'}} onClick={() => setHeader(true)}
                         className={"ball"}>1
                    </div>
                    <div style={{backgroundColor: header ? '#999' : '#CD553F'}} onClick={() => setHeader(false)}
                         className={"ball"}>2
                    </div>
                </div>

                <div className={"left"}>
                    <span className={"topText"}>Latest New Design 2020</span>
                    {header ?
                        <>
                            <span className={"centerText"}>Fashion Lookbook</span>
                            <span className={"bottomText"}>
                            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                            reasonable
                        </span>
                        </>
                        :
                        <>
                            <span className={"centerText2"}>Fashion Lookbook</span>
                            <span className={"bottomText2"}>
                            combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
                            reasonable
                        </span>
                        </>
                    }

                    <DefaultBtnComponent mTop={"30px"} width={"200px"} height={"50px"} title={"Discover now"}/>
                </div>

                {header ?
                    <div className={"img"}></div>
                    :
                    <div className={"img2"}></div>
                }
            </div>
        </div>
    )
}