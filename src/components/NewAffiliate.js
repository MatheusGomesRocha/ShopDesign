import './NewAffiliate.css';

import LineDivComponent from '../sideComponents/LineDiv';
import AccountSettingsComponent from "../sideComponents/AccountSettings";

export default () => {
    return(
        <div className={"newAffiliate"}>
            <div className={"mainDiv"}></div>

            <AccountSettingsComponent />
        </div>
    )
}