import {withStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";

export default(props) => {
    const DefaultBtn = withStyles(() => ({
        root: {
            padding: 20,
            height: props.height,
            marginTop: props.mTop,
            borderRadius: 5,
            width: props.width,
            backgroundColor: '#CD553F',
            color: '#fff',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '500ms',
            textTransform: props.transform ? props.transform : 'uppercase',

            '&:hover': {
                backgroundColor: '#000',
            }
        },
    }))(Button);

    return (
        <DefaultBtn>{props.title}</DefaultBtn>
    )
}