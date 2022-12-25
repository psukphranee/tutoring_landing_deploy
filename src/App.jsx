import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './styles'
import {About, Hero, Navbar, Services, Pricing, Contact, TestSection} from './components/components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full flex-col">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <TestSection />
    </div>
  )
}

export default App
