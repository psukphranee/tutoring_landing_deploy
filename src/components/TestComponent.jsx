import NumberSVG from '../assets/NumberSVG'

export default function TestComponent(props) {
    return (
      <div className='flex flex-col items-center justify-center
        m-2 p-2'>
        <NumberSVG width='80' height='80' number={props.number} />
        <h3>{props.desc}</h3>
      </div>
    )
  }
  