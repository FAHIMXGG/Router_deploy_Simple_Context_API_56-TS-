import React from 'react';


const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message= <div>
            <h3>Boroloxx</h3>
            <p><small>thanks for giving your money</small></p>
        </div>
    }

    return (
        <div>
            <h2>order summary {cart.length}</h2>
            
                {cart.length> 2 ? <span>aro kino</span> : <span>fokira</span>}
            
            {message}
            {
                cart.map(TShirt =>  <p key={TShirt._id}
                >
                    
                      {TShirt.name} 
                      <button 
                      onClick={() =>handleRemoveFromCart(TShirt._id)}
                      >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!</p>
            }
            {
                cart.length !== 3 || <p> tinto to hoilo nah</p>
            }
        </div>
    );
};

export default Cart;

/*
 * Conditional Rendering
 * use if or if else to set a variable that will contain an element, components
 * ternary: condition ? 'for true' : 'false'
 * logical &&: (if the condition is true than the next thing will be displayed)
 * Logical || (if the condition is false than the next thing will be displayed)
 * 
 */