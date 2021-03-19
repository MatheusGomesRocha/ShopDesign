import './LineDiv.css';

export default (props) => {
    return(
        <div className={"titleLine"}>
            <span style={{fontWeight: props.bolder}} className={"title"}>{props.title}</span>
            <div className={"line"}></div>
        </div>
    )
}