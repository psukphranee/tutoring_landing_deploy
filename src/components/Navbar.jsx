import React from 'react'
import styles from '../styles'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-center justify-between'>
        <div className='flex flex-row'>
            <ul className={`${styles.dev}`}>
                <li>Menu</li>
                <li>Menu</li>
                <li>Menu</li>
                <li>Menu</li>
                <li>Menu</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar