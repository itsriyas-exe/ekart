import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/slices/wishListSlice'
import { addItemToCart } from '../Redux/slices/cartSlice'

function WishList() {

  const wishlistArray = useSelector((state)=>state.Wishlist)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const wishListFunction = (item) =>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
 
  

  return (
    <>
   <h1 className='pt-32 text-center text-4xl font-bold'>Wishlist</h1>
   {wishlistArray?.length > 0 ? <main className='px-[40px] mt-[50px] mb-[30px] md:grid grid-cols-4'> 
     { wishlistArray.map((item)=> (
         <div className='  p-[20px] '>
         <div className='w-full h-[360px] flex justify-center items-center'>
           <img src={item.image} alt="" className='w-[80%] h-[80%] rounded' />
         </div>
         <p className='px-[10px] pt-[10px]'>{item.title}</p>
         <p className=' text-[18px] text-teal-600 font-bold px-[10px]'>{item.price}</p>
         <div className='flex justify-between px-[15px] text-[21px]'>
         <FontAwesomeIcon icon={faTrash} className='border border-red-900 p-[12px] rounded text-red-800' onClick={()=>dispatch(removeWishlistItem(item?.id))} />
         <FontAwesomeIcon icon={faCartShopping}  className='border border-teal-900 p-[12px] rounded text-teal-600' onClick={()=> wishListFunction(item)}  /> 
         </div>
       </div>
     ))}
      
      </main>
      :
      <div className='w-full h-full flex justify-center items-center p-[40px]'>
        <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" className='w-[400px] h-[300px]' />
      </div>}
    </>
  )
}

export default WishList