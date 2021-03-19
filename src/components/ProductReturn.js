import './ProductReturn.css';
import PathComponent from '../sideComponents/Path';

export default () => {
    return(
        <div className={"return"}>
            <PathComponent return={true}/>
            Olá mundo
        </div>
    )
}