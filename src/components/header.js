import React, { useState, useEffect} from 'react' 
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png' 
import { useSelector, useDispatch } from 'react-redux' 
import { toggleStatusTab } from '../stores/cart'



const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let total = 0;
        carts.forEach(item => total += item.quantity);
        setTotalQuantity(total);
    }, [carts])
    const handleOpenTabCart = () => {
        dispatch(toggleStatusTab());
    }
  return (
    <header className='flex justify-between items-center mb-5'>
        <Link to="/" className='text-xl font-semibold'> <h2 className='text-3xl font-bold'>
          Rudy's<span className='text-[#966fb3] px-2'>Consulting</span>
        </h2></Link>

        <div className='grid gap-4 grid-cols-3'>
         
        <Link to='/' className='rounded-xl uppercase text-lg tracking-wider p-2 hover:bg-[#966fb3] duration-300'>home</Link>
          <Link to='/about' className='rounded-xl uppercase text-lg tracking-wider p-2 hover:bg-[#966fb3] duration-300'>about</Link>
          <Link to='/services' className='rounded-xl uppercase text-lg tracking-wider p-2 hover:bg-[#966fb3] duration-300'>services</Link>
         
        </div>
        
        <div className='w-11 h-11 hover:bg-[#966fb3] rounded-full
        flex justify-center items-center relative' onClick={handleOpenTabCart}>
            <img src={iconCart} alt="" className='w-6'/>
            <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
            w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
        </div>
    </header>
  )
}

export default Header