import {useState} from "react";
import './Header.css';

import Header1 from '../img/header.png';
import Header2 from '../img/header2.png';

import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default () => {
    const [header, setHeader] = useState(true);

    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 16,
            height: 50,
            marginTop: 30,
            borderRadius: 10,
            width: 200,
            backgroundColor: '#CD553F',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',

            '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
            }
        },
    }))(Button);


    return (
        <div className={"header"}>
            <div className={"btnCarousel"}>
                <div style={{backgroundColor: header ? '#CD553F' : '#999'}} onClick={() => setHeader(!header)}
                     className={"ball"}>1
                </div>
                <div style={{backgroundColor: header ? '#999' : '#CD553F'}} onClick={() => setHeader(!header)}
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

                <DefaultBtn>Discover now</DefaultBtn>
            </div>

            {header ?
                <div className={"img"}></div>
                :
                <div className={"img2"}></div>
            }
        </div>
    )
}