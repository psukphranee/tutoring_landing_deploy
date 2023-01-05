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
      <nav>
      {/* web menu */}
      <div className='hidden sm:flex flex-row justify-end'>
        <ul className='flex flex-row'>
          {
            sections.map((item, index) => (
                  <li key={index} className={`py-2 px-4`} >
                    <a href={`#${item}`} onClick={() => setToggle((prev) => (!prev))}>{item}</a>
                  </li>
                ))
          }
        </ul>
      </div>

      {/* mobile menu */}
      <div className='sm:hidden flex flex-1 border-3 border-dashed border-white justify-end'>

        <div className='p-2 bg-black'>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => (!prev))} />
        </div>

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