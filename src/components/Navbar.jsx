import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";

const Navbar = () => {

  let Links = [
    { name: "Home", l: "home" },
    { name: "Projects", l: "projects" },
    { name: "Tech Stack", l: "tech" },
    { name: "Contact Me", l: "contact" }

  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-[#23253a] py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl md:text-6xl cursor-pointer flex items-center 
       text-red-400 font-signature'>
          Bhavya Kumar Makwana
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          {open ? <FaTimes className='text-white' /> : <GiHamburgerMenu name={open ? 'close' : 'menu'} className='text-white' />}
        </div>

        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-[#23253a] lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='lg:ml-8 text-xl lg:my-0 my-7'>
                <Link to={link.l} smooth duration={500} spy={true} className='text-2xl hover:border-b-2 hover:border-yellow-200 text-white hover:text-yellow-200 duration-500'>{link.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar