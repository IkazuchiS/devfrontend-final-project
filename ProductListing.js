import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const products = [
    { id: 1, name: 'Snake Plant', price: 15, image: '/images/snakeplant.jpg' },
    { id: 2, name: 'Fiddle Leaf Fig', price: 35, image: '/images/fig.jpg' },
    { id: 3, name: 'Pothos', price: 20, image: '/images/pothos.jpg' },
];

const ProductListing = () => {
    const dispatch = useDispatch();

    return (
        <div className="product-list">
            {products.map((plant) => (
                <div key={plant.id} className="plant">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button onClick={() => dispatch(addToCart(plant))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
