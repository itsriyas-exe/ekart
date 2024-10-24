import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer className='w-full p-[30px]'>
        <section className='p-[20px]'>
          <h1 className='text-xl pb-[20px]'><FontAwesomeIcon icon={faCartShopping} />&nbsp;E-Kart</h1>
          <p> Ekart logistics or Ekart courier is an Indian courier delivery services company, headquartered in Bangalore, Karnataka. A subsidiary of electronic commerce company Flipkart Pvt. Ltd., it is run by Instakart services Pvt. Ltd. Ekart delivers around 10 million shipments a month.</p>
        </section>
        <section  className='p-[20px] flex flex-col items-center justify-start'> 
          <h1 className='text-xl pb-[35px]'>Links</h1>
         <Link to={'/'}> <p className='pt-[20px]'>Home</p></Link>
         <Link to={'/cart'}> <p  >Cart</p></Link>
          <Link to={'/wishlist'}><p>WishList</p></Link>
        </section>
        <section  className='p-[20px] flex flex-col items-center justify-start'> 
          <h1 className='text-xl pb-[35px]'>Guides</h1>
          <p>React Redux</p>
          <p className='py-[20px]'>Tailwind CSS</p>
          <p>Material UI</p>
        </section>
        <section  className='p-[20px]  '>
        <h1 className='text-xl pb-[35px] pl-[10px] '>Contact Us</h1>
          <div>
            <input type="text" className='px-[40px] py-[10px]  mb-[10px]' />
            <button className='text-white bg-black py-[9px] px-[16px]'>Subscribe</button>
          </div>
          <div className='flex justify-around items-center pt-[25px]'>
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faWhatsapp} />
          </div>
        </section>
     </footer>
    </>
  )
}

export default Footer