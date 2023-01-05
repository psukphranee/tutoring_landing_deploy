import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './styles'
import {About, Hero, Navbar, Services, Pricing, Contact, TestSection} from './components/components'

function App() {

  const [count, setCount] = useState(0)

  return (

    <div className="w-full overflow-hidden">

      <div className="flex flex-col text-black m-4">

        <div className='mx-6 my-4'>
          <Navbar />
        </div>

        <div className='mx-6 my-4 flex flex-col items-center justify-start'>
          <Hero/>
          <About/>
          <Services/>
          <Pricing/>
          <Contact/>
          {/* <TestSection/> */}
        </div>
      </div>
    </div>
  )
}

export default App
