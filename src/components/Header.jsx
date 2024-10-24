import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart,faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

  const [show,setShow] = useState(false)
  const wishlistArray = useSelector((state)=>state.Wishlist)
  const cartArray = useSelector((state)=>state.cartItem)
  
  

  const showBar = ()=> {
    setShow(!show)
  }
  return (
    <>
      <header className="bg-teal-700 text-white p-4 w-full fixed">
      <div className="container mx-auto md:flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center w-full px-5">
          <span className="text-3xl mr-2">🛒</span>
          <Link to={'/'}><h1 className="text-lg md:text-xl font-bold me-3">Ekart</h1></Link>
          <button onClick={showBar} className='ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
        </div>

        {/* Wishlist and Cart Section */}
        { show &&
          <div className="flex space-x-2 md:space-x-4 md:hidden mt-4">
          <Link to={'/wishlist'}>
            <button className="flex items-center border border-white rounded-lg px-2 py-1 md:px-4 md:py-2 space-x-1 md:space-x-2 hover:bg-white hover:text-teal-600">
              <span className="text-red-500">❤️</span>
              <span className="md:hidden sm:inline">Wishlist</span>
              <span className="bg-white text-gray-900 rounded-full px-1 md:px-2 py-0.5 text-xs md:text-sm">{wishlistArray?.length}</span>
            </button>
          </Link>

          <Link to={'/cart'}>
            <button className="flex items-center border border-white rounded-lg px-2 py-1 md:px-4 md:py-2 space-x-1 md:space-x-2  hover:bg-white hover:text-teal-600">
              <span className="text-green-500">🛒</span>
              <span className="md:hidden sm:inline">Cart</span>
              <span className="bg-white text-gray-900 rounded-full px-1 md:px-2 py-0.5 text-xs md:text-sm">{cartArray?.length}</span>
            </button>
          </Link>
        </div>}
        <div className="md:flex space-x-2 md:space-x-4 hidden">
          <Link to={'/wishlist'}>
            <button className="flex items-center border border-white rounded-lg px-2 py-1 md:px-4 md:py-2 space-x-1 md:space-x-2 hover:bg-white hover:text-teal-600">
              <span className="text-red-500">❤️</span>
              <span className="hidden sm:inline">Wishlist</span>
              <span className="bg-white text-gray-900 rounded-full px-1 md:px-2 py-0.5 text-xs md:text-sm">{wishlistArray?.length}</span>
            </button>
          </Link>

          <Link to={'/cart'}>
            <button className="flex items-center border border-white rounded-lg px-2 py-1 md:px-4 md:py-2 space-x-1 md:space-x-2  hover:bg-white hover:text-teal-600">
              <span className="text-green-500">🛒</span>
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-white text-gray-900 rounded-full px-1 md:px-2 py-0.5 text-xs md:text-sm">{cartArray?.length}</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header