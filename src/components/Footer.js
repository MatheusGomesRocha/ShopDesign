import './Footer.css';

export default () => {
    let array = [
        {
            id: 1,
            title: 'Information',
            links: ['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Brands']
        },
        {
            id: 2,
            title: 'My Account',
            links: ['My Account', 'Order History', 'Wish List', 'Newsletter', 'Specials']
        },
        {
            id: 3,
            title: 'Customer Service',
            links: ['Contact Us', 'Returns', 'Site Map', 'Gift Certificates', 'Affiliate']
        },
        {
            id: 4,
            title: 'Contact Us',
            links: ['Fashion Store Duffin Street Pufville India surat', '123-456-789', 'demo@demo.com']
        },
    ];

    return(
        <div className={"footer"}>
            <div className={"topDiv"}>
                <div className={"textDiv"}>
                    <span className={"title"}>Join Our Newsletter Now</span>
                    <span className={"subTitle"}>You Have Successfully Subscribed Newsletter</span>
                </div>
                <div className={"inputDiv"}>
                    <input className={"email"} placeholder={"Your email address"}/>
                    <div className={"btn"}>Subscribe</div>
                </div>

                <div className={"bottomDiv"}>
                    {array.map((item, k) => (
                        <div className={"itemDiv"}>
                            <div className={"top"}>
                                <span className={"title"}>{item.title}</span>
                                <div className={"line"}></div>
                            </div>
                            <a href={"#"} className={"link"}>{item.links}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}