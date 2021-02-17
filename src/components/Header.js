import './Header.css';
import Header1 from '../img/header.png';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default () => {
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
            <div className={"left"}>
                <span className={"topText"}>Latest New Design 2020</span>
                <span className={"centerText"}>Fashion Lookbook</span>
                <span className={"bottomText"}>
                    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable
                </span>
                <DefaultBtn>Discover now</DefaultBtn>
            </div>
            <img className={"img"} src={Header1}/>
        </div>
    )
}