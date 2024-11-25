import React from 'react' 
import { Link } from 'react-router-dom';
import iconCart from '../assets/images/iconCart.png'
import {  useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCard = (props) => {
    //const carts = useSelector(store => store.cart.items);
    const {id, name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
    return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
            <img src={image} alt='' className='w-full object-cover rounded-b-lg h-80 object-cover object-top shadow-lg hover:shadow-2xl' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-between items-center'>
            <p>
                $<span className='text-2xl font-medium'>{price}</span>/h
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
                <img src={iconCart} alt="" className='w-5'/>
                Add To Cart
            </button>
        </div>
        
    </div>
  )
}

export default ProductCard