import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt , handleAddToCart}) => {
    //console.log(tShirt)

    const {picture, name ,price} = tShirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;