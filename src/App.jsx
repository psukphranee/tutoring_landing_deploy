import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './styles'
import {  About, Hero, Navbar, Services, Pricing, Contact, TestSection, HowItWorks, Subjects, Location } from './components/components'

function App() {

  const [count, setCount] = useState(0)

  return (

    <div className="w-full overflow-hidden">
      <div className="flex flex-col text-black">
        <div className='navContainer z-10'>
          <Navbar />
        </div>
        <div className='relative -top-14 flex flex-col items-center justify-start'>
          <Hero order={1}/>          
          <Subjects order={2}/>
          <Location order={3}/>
          {/* <HowItWorks order={4}/> */}
          {/* <Services order={4}/> */}
          <Contact order={4}/>
          <About order={5}/>
          <TestSection />
        </div>
      </div>
    </div>
  )
}

export default App
