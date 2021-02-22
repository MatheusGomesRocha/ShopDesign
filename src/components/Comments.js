import './Comments.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import img1 from '../img/user1.jpg';
import img2 from '../img/user2.jpg';
import img3 from '../img/user3.jpg';
import AspaIcon from '../svg/aspa';


export default () => {
    let array = [
        {
            id: 1,
            img: img1,
            name: 'Mr. John Doe',
            area: 'Designer',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },

        {
            id: 2,
            img: img2,
            name: 'Mr. John Doe',
            area: 'Designer',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },

        {
            id: 3,
            img: img3,
            name: 'Mr. John Doe',
            area: 'Designer',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
    ]
    return (
        <div className={"comments"}>
            <Carousel infiniteLoop={true} autoPlay={true} swipeable={true} showStatus={false} showThumbs={false}>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <img className={"img"} src={item.img}/>
                        <span className={"name"}>{item.name}</span>
                        <span className={"area"}>{item.area}</span>
                        <AspaIcon/>
                        <p className={"comment"}>{item.comment}</p>
                    </div>
                ))}

            </Carousel>
        </div>

    )
}