import './Map.css';
import PathComponent from '../sideComponents/Path';

export default () => {
    return(
        <div className={"map"}>
            <PathComponent map={true} />
            Olá mundo
        </div>
    )
}