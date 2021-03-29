import './Map.css';
import PathComponent from '../sideComponents/Path';

let array = [
    {
        id: 1,
        title: 'Headgear',
        subTitle1: 'Haute Couture',
        links1: ['Shawls', 'Test 1', 'Wraps'],
        subTitle2: 'Knee Clothing',
        links2: ['Hosiery', 'Kurties', 'Roller Skates'],
        subTitle3: 'Printers',
        links3: ['Athletic Shoes', 'Sports Masks', 'Undergarments']
    },

    {
        id: 2,
        title: 'Mens Wear',
        subTitle1: 'Skirts',
        links1: ['Dresses', 'Kimono', 'Western Wear'],
        subTitle2: 'Womans Wear',
        links2: ['Jeans', 'Sarees', 'Shirt'],
    },

    {
        id: 3,
        title: 'Ice Skates',
        subTitle1: 'PC',
        links1: ['Culottes', 'Leggings'],
        subTitle2: 'Aprons',
        links2: ['Frock Coats', 'Test 4'],
    },

    {
        id: 4,
        title: 'Dungarees'
    },

    {
        id: 5,
        title: 'Jodhpur Pants'
    },

    {
        id: 6,
        title: 'Stirrup Pants'
    },

    {
        id: 7,
        title: 'Footwear'
    },

    {
        id: 8,
        title: 'Punk Pants'
    },

    {
        id: 9,
        title: 'Speacia Offers'
    },

    {
        id: 10,
        title: 'My Account',
        subTitle1: 'Account Information',
        subTitle2: 'Password',
        subTitle3: 'Address Book',
        subTitle4: 'Order History',
        subTitle5: 'Downloads',
    },

    {
        id: 11,
        title: 'Shopping Cart'
    },

    {
        id: 12,
        title: 'Checkout'
    },

    {
        id: 13,
        title: 'Search'
    },

    {
        id: 14,
        title: 'Information',
        subTitle1: 'About Us',
        subTitle2: 'Delivery Information',
        subTitle3: 'Privacy Policy',
        subTitle4: 'Terms & Conditions',
        subTitle5: 'Contact US',
    },
]

export default () => {
    return (
        <div className={"map"}>
            <PathComponent map={true}/>
            Olá mundo
        </div>
    )
}