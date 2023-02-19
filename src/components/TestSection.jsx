import React from 'react'
import TestComponent from './TestComponent'
import NumberSVG from '../assets/NumberSVG'
import HowItWorks from './HowItWorks'

const TestSection = () => {
  return (
    <div>
      <div>
        <HowItWorks />
      </div>
      <div className='flex flex-row'>
        <TestComponent number="1" desc="Book a Free Consultation" />
        <TestComponent number="2" desc="Book a Trial Session" />
        <TestComponent number="3" desc="Plan Ahead" />
      </div>
    </div>
  )
}

export default TestSection