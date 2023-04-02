import React from 'react'
import { useState } from 'react'
import { close, menu } from '../assets';
import styles from '../styles';
import { data } from '../data/data';

const Navbar = () => {
  
  const sections = Object.keys(data);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
      <nav className='fixed flex justify-end item-center px-2 w-full'>
      {/* web menu */}
      <div className='hidden sm:flex flex-row w-full'>
        <ul className='flex flex-row justify-end w-full'>
          {
            sections.map((item, index) => (
                  <li key={index} className={`py-4 px-4`} >
                    <a href={`#${item}`} className='text-white hover:text-orange-600' onClick={() => setToggle((prev) => (!prev))}>{item}</a>
                  </li>
                ))
          }
        </ul>
      </div>

      {/* mobile menu edit */}
      <div className='sm:hidden flex justify-end item-center w-full'>

          {/* menu button */}
        <div className='pr-4 rounded pt-4 bg-blue-200'>
          <img src={toggle ? close : menu} alt="menu" className="w-[36px] h-[36px] object-contain" onClick={() => setToggle((prev) => (!prev))} />
        </div>
          
          {/* the menu that pops up */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 mx-4 my-2 min-w-[140px] rounded-xl bg-white w-[80%]`}
        >
          <ul className={`${toggle ? 'flex' : 'hidden'}  flex-col`}>
            {
              sections.map((item, index) => (
                <li key={index} className={`py-2 px-4`} >
                  <a href={`#${item}`} onClick={() => setToggle((prev) => (!prev))}>{item}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      </nav>
  )
}

export default Navbar