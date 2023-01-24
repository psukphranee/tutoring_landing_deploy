import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './styles'
import {About, Hero, Navbar, Services, Pricing, Contact, TestSection} from './components/components'

function App() {

  const [count, setCount] = useState(0)

  return (

    <div className="w-full overflow-hidden">
      <div className="flex flex-col text-black">
        <div className='navContainer z-10'>
          <Navbar />
        </div>
        <div className='relative -top-14 flex flex-col items-center justify-start'>
          <Hero/>          
          <Services/>
          <Pricing/>
          <Contact/>
          <About/>
          {/* <TestSection/> */}
        </div>
      </div>
    </div>
  )
}

export default App
