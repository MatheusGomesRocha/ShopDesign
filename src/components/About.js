import React from "react";
import './About.css';

import LikeIcon from '../svg/like';
import BusIcon from '../svg/bus';
import PranchetaIcon from '../svg/prancheta';
import DangerIcon from '../svg/danger';

import PathComponent from '../sideComponents/Path';

export default () => {
    let array = [
        {
            id: 1,
            icon: LikeIcon,
            title: 'The standard Lorem Ipsum passage',
            text: 'An natum nulla eruditi mei, te qui idque adipisci, nonumy graeci has ad. Cu diam dolor noluisse nec. Nam ex dicta graeco, audire nominati persequeris eu eos. Pri nibh dolor soleat cu, sanctus inermis instructior eum ei. Scripta ceteros sit ex. Et eum alia laudem delectus.'
        },
        {
            id: 2,
            icon: BusIcon,
            title: 'Aliquam vulputate, neque consectetur gravida egestas',
            text: 'Et quis dictas meliore nec, habeo lorem blandit et vis, alia veniam assueverit an duo. Facilis offendit eleifend id has. Deserunt expetenda est an, tacimates iudicabit sed eu. Cum eu periculis similique, ut meis expetenda quo.  Eam ea omnis fierent disputando.'
        },
        {
            id: 3,
            icon: PranchetaIcon,
            title: 'Suspendisse vel lorem massa. Morbi',
            text: 'Eam eu illud menandri praesent, ei regione oporteat tractatos nam. Ad mea postea voluptua constituam, aeterno aperiri facilis et nec, utroque veritus no mea. Mel quando tantas accusamus et, quo quot augue senserit ex, possim efficiendi has no. Nam at bonorum prodesset, per ne primis platonem, mel in mundi salutatus constituto. Ei vis vidit oportere, no prima eripuit ius, vim at justo legendos.'
        },
        {
            id: 4,
            icon: DangerIcon,
            title: 'Vivamus ut diam ut risus sodales vestibulum eget varius dolor',
            text: 'Has ut stet discere nonumes, te dicam nullam vim. Eam iriure tacimates persecuti ut. No labore reprimique consequuntur pri, iusto nihil ex usu. Ne illud definitionem pri, prima fuisset phaedrum sea cu. His ea partem tempor elaboraret, nam iudico atomorum accusamus ad, quo ut quidam aliquam voluptua. Cu cotidieque dissentiunt vix, at putent tamquam scribentur usu.'
        }
    ]
    return(
        <div className={"about"}>

            <PathComponent />

            <div className={"arrayDiv"}>
                <span className={"arrayTitle"}>Terms & Conditions</span>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <span className={"title"}>{item.title}</span>
                        <div className={"itemRow"}>
                            <div style={{width: '100px'}}>
                                <item.icon />
                            </div>
                            <span className={"text"}>{item.text}</span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}