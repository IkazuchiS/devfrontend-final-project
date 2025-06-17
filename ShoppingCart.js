import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price} x {item.quantity}</p>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))}
            <button>Checkout (Coming Soon)</button>
        </div>
    );
};

export default ShoppingCart;
