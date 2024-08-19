import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const {cart}=useContext(CartContext);

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
      <div>{cart.map((item)=>{
        return <div>{item.title}</div>
      })}</div>
    </div>
  )
}

export default Sidebar