import './Gift.css';
import PathComponent from '../sideComponents/Path';

export default () => {
    return(
        <div className={"gift"}>
            <PathComponent gift={true} />

            Olá mundo
        </div>
    )
}