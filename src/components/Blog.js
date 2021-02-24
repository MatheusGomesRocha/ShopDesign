import './Blog.css';

export default () => {
    let array = [
        {
            id: 1,
            date: '23 Nov , 2017',
            title: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
            text: 'metus nunc gravida mauris, sed aliquam leo eros a ex. Duis orci sapien, consequat ac mauris vitae, placerat pellentesque enim. Integer sollicitudin molestie urna ut facilisis. Mauris porttitor mauris consequat cursus scelerisque. Nunc placerat nulla a justo iaculis vestibulum. Etiam sed semper nisi. Vestibulum consectetur, massa in porttitor dignissim, mauris tortor sollicitudin lorem, sit amet pharetra neque nulla non nisi. Proin nec sapien sapien. Sed mattis erat ipsum, id pulvinar arcu tristique quis. Interdum et malesuada fames ac ante ipsum primis in faucibus'
        },
        {
            id: 2,
            date: '23 Nov , 2017',
            title: 'Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A',
            text: 'Nunc et mollis mauris. Duis sit amet cursus ante, vitae imperdiet urna. Etiam condimentum tincidunt leo, non dapibus nisi aliquam id. Nam convallis nulla scelerisque, scelerisque nulla nec, cursus risus. Morbi a imperdiet mi. In scelerisque viverra ipsum sed tempor. Nunc blandit lorem eu tortor aliquam, et congue leo ultricies.'
        },
        {
            id: 3,
            date: '23 Aug , 2017',
            title: 'Sed Viverra Hendrerit Nisl, At Facilisis Sapien Malesuada Id',
            text: 'porttitor suscipit justo. Morbi quis ex non dui gravida luctus. Sed consectetur, magna eget placerat dapibus, diam mauris congue ante, pharetra cursus neque magna at mi. Maecenas tincidunt, lorem sit amet interdum posuere, arcu quam hendrerit odio, ut luctus est nisl sit amet nisl. Fusce efficitur id ipsum sit amet aliquet. Duis non sodales purus. Pellentesque tempus lectus diam, sollicitudin luctus mi elementum ullamcorper. Praesent rutrum, urna sed venenatis imperdiet, odio elit maximus ante, quis malesuada ligula quam eget est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque dapibus lectus at purus sollicitudin, a semper erat mollis.'
        },
    ];

    return(
        <div className={"blog"}>
            <div className={"arrayDiv"}>
                {array.map((item, k) => (
                    <div className={"itemDiv"}>
                        <div className={"top"}>
                            <span className={"date"}>{item.date}</span>
                            <span className={"title"}>{item.title}</span>
                            <span className={"content"}>{item.text}</span>
                        </div>
                        <div className={"readMore"}>
                            <div className={"ballDiv"}></div>
                            <span className={"readText"}>Read More</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}