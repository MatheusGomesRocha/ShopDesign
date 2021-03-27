import {useState, useEffect} from "react";
import './Header.css';

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
                <div className={"headerTopLeft"}>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Headgear</a>
                    </div>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Mens Wear</a>
                    </div>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Ice Skates</a>
                    </div>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>Dungarees</a>
                    </div>

                    <div className={"headerLinkDiv"}>
                        <a className={"headerLink"}>More</a>
                    </div>
                </div>

                <div className={"headerTopRight"}>
                    {/*Link 1*/}
                    <div className={"headerTopRightLink"}>
                        <Button onMouseOver={() => setHoverLink1(true)}
                                onMouseOut={() => setHoverLink1(false)}
                                aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick}
                        >
                            <UserIcon fill={hoverLink1 ? '#CD553F' : '#000'}/>
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
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"20px"} height={"20px"}/>
                                <span style={{marginLeft: 10}}>Register</span>
                            </MenuItem>

                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose}
                                      onMouseOver={() => setHoverLink2(true)}
                                      onMouseOut={() => setHoverLink2(false)}
                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"20px"} height={"20px"}/>
                                <span style={{marginLeft: 10}}>Login</span>
                            </MenuItem>

                            <MenuItem className={"menuItem"}
                                      style={{width: 200, backgroundColor: 'transparent'}}
                                      onClick={handleClose}
                                      onMouseOver={() => setHoverLink2(true)}
                                      onMouseOut={() => setHoverLink2(false)}
                            >
                                <UserIcon fill={hoverLink2 ? '#CD553F' : '#000'} width={"20px"} height={"20px"}/>
                                <span style={{marginLeft: 10}}>Compare</span>
                            </MenuItem>

                        </Menu>
                    </div>

                    {/*Link 2*/}
                    <div className={"headerTopRightLink"}
                         onMouseOver={() => setHoverLink3(true)}
                         onMouseOut={() => setHoverLink3(false)}
                    >
                        <HeartIcon fill={hoverLink3 ? '#CD553F' : '#000'}/>
                    </div>

                    {/*Link 3*/}
                    <div className={"headerTopRightLink"}
                         onMouseOver={() => setHoverLink4(true)}
                         onMouseOut={() => setHoverLink4(false)}
                    >
                        <BasketIcon fill={hoverLink4 ? '#CD553F' : '#000'}/>
                        <div className={"badge"}>0</div>
                    </div>

                    {/*Link 4*/}
                    <div className={"headerTopRightLink"}>
                        <Button onMouseOver={() => setHoverLink5(true)}
                                onMouseOut={() => setHoverLink5(false)}
                                aria-controls="simple-menu" aria-haspopup="true"
                                onClick={handleClick2}
                        >
                            <MenuCircleIcon fill={hoverLink5 ? '#CD553F' : '#000'}/>
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