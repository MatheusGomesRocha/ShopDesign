import React from 'react';
import './SuccessMessage.css';

import CheckIcon from '../svg/check-circle';

export default (props) => {
    return (
        <div className={"successMessage"}>
            <div className={"iconCheck"}>
                <CheckIcon />
            </div>
            <span className={"title"}>Success!!</span>
            <span className={"text"}>
                {props.btnPressed == 'wish' ? 'You Must Login Or Create An Account To Save' : 'You Have Added'}
                <span style={{fontWeight: 'bold', color: '#000'}}> {props.name} </span>
                To Your
                <strong style={{fontWeight: 'bold', color: '#000'}}>
                    {props.btnPressed == 'cart' && ' Shopping Cart'}
                    {props.btnPressed == 'wish' && ' Wish List'}
                    {props.btnPressed == 'compare' && ' Product Comparison'}
                </strong>
                !
            </span>
        </div>
    );
}