import './New.css';
import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default () => {
    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            fontSize: 16,
            height: 40,
            width: 150,
            marginTop: 30,
            borderRadius: 5,
            backgroundColor: 'transparent',
            border: '1px solid #000',
            color: '#000',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',

            '&:hover': {
                backgroundColor: '#CD553F',
                color: '#fff',
                border: '1px solid #CD553F'
            }
        },
    }))(Button);

    return(
        <div className={"new"}>
            <div className={"left"}>
                <div className={"leftImg"}>
                    <div className={"divHidden"}></div>
                </div>
                <div className={"leftContent"}>
                    <div className={"line"}></div>
                    <div className={"divText"}>
                        <span className={"title"}>New Collection</span>
                        <span className={"subTitle"}>New Womens Fashion</span>
                        <DefaultBtn>Shop Now</DefaultBtn>
                    </div>
                </div>
            </div>

            <div className={"right"}>
                <div className={"rightContent"}>
                    <div className={"divText"}>
                        <span className={"title"}>New Collection</span>
                        <span className={"subTitle"}>New Mens Fashion</span>
                        <DefaultBtn>Shop Now</DefaultBtn>
                    </div>
                    <div className={"line"}></div>
                </div>
                <div className={"rightImg"}>
                    <div className={"divHidden"}></div>
                </div>
            </div>
        </div>
    )
}