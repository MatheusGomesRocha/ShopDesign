import './Footer.css';
import PlaneIcon from '../svg/paper-plane';
import InstaIcon from '../svg/instagram';
import FaceIcon from '../svg/facebook';
import TwitterIcon from '../svg/twitter';

import {Link} from 'react-router-dom';
import React from "react";

export default () => {

    let array = [
        {
            id: 1,
            title: 'Information',
            link1: 'About Us',
            link2: 'Delivery Information',
            link3: 'Privacy Policy',
            link4: 'Terms & Conditions',
            link5: 'Brands',
            about: true
        },
        {
            id: 2,
            title: 'My Account',
            link1: 'My Account',
            link2: 'Order History',
            link3: 'Wish List',
            link4: 'Newsletter',
            link5: 'Specials',
            login: true
        },
        {
            id: 3,
            title: 'Customer Service',
            link1: 'Contact Us',
            link2: 'Returns',
            link3: 'Site Map',
            link4: 'Gift Certificates',
            link5: 'Affiliate',
            service: true
        },
        {
            id: 4,
            title: 'Contact Us',
            link1: 'Fashion Store Duffin Street Pufville India surat',
            link2: '123-456-789',
            link3: 'demo@demo.com',
            link4: null,
            link5: null
        },
    ];

    return (
        <div className={"footer"}>
            <div className={"topDiv"}>
                <PlaneIcon/>
                <div className={"textDiv"}>
                    <span className={"title"}>Join Our Newsletter Now</span>
                    <span className={"subTitle"}>You Have Successfully Subscribed Newsletter</span>
                </div>
                <div className={"inputDiv"}>
                    <input className={"input"} placeholder={"Your email address"}/>
                    <div className={"btn"}>Subscribe</div>
                </div>
            </div>

            <div className={"bottomDiv"}>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <div className={"top"}>
                            <span className={"title"}>{item.title}</span>
                            <div className={"line"}></div>
                        </div>

                        {item.about &&
                        <>
                            <Link to={"/About"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link1}</span>
                            </Link>

                            <Link to={"/About"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link2}</span>
                            </Link>

                            <Link to={"/About"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link3}</span>
                            </Link>

                            <Link to={"/About"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link4}</span>
                            </Link>

                            <Link to={"/About"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link5}</span>
                            </Link>
                        </>
                        }

                        {item.login &&
                        <>
                            <Link to={"/Login"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link1}</span>
                            </Link>

                            <Link to={"/Login"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link2}</span>
                            </Link>

                            <Link to={"/Login"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link3}</span>
                            </Link>

                            <Link to={"/Login"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link4}</span>
                            </Link>

                            <Link to={"/Login"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link5}</span>
                            </Link>
                        </>
                        }

                        {item.service &&
                        <>
                            <Link to={"/Contact"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link1}</span>
                            </Link>

                            <Link to={"/Product_return"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link2}</span>
                            </Link>

                            <Link to={"/Map"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link3}</span>
                            </Link>

                            <Link to={"/Gift_certificate"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link4}</span>
                            </Link>

                            <Link to={"/Login"} style={{marginTop: 15, textDecoration: 'none', color: '#000'}}>
                                <span className={"link"}>{item.link5}</span>
                            </Link>
                        </>
                        }

                    </div>
                ))}
            </div>

            <div className={"line"}></div>

            <div className={"credits"}>
                <div className={"divIcon"}>
                    <InstaIcon/>
                </div>
                <div className={"divIcon"}>
                    <FaceIcon/>
                </div>
                <div className={"divIcon"}>
                    <TwitterIcon/>
                </div>
            </div>

            <span className={"creditsText"}>Powered By OpenCart fevino © 2021</span>
        </div>
    )
}