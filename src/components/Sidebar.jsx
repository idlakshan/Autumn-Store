import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart,clearCart,total}=useContext(CartContext);

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} bg-white w-full md:w-[35vw] xl:max-w-[30vw] shadow-2xl transition-all duration-300 z-20 px-4 lg:px-[35px] h-full fixed top-0`}>
      <div className='flex items-center justify-between border-b'>
        <div className='uppercase text-sm font-bold'>
          Shopping Bag(0)
        </div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[450px] overflow-y-auto overflow-x-hidden border-b'>{cart.map((item)=>{
        return <CartItem item={item} key={item.id}/>
      })}</div>

      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'><span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}</div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'><FiTrash2/></div>
        </div>
        <Link to={"/"} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View Cart</Link>
        <Link to={"/"} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>Checkout</Link>
      </div>
    </div>
  )
}

export default Sidebar