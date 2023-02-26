import NumberSVG from '../assets/NumberSVG'

export default function CardHIW(props) {

    const width = props.width || 100;
    const height = props.height || 100;

    return (

      <div className='flex flex-col items-center justify-center'>
        <NumberSVG width={width} height={width} number={props.number} />
        <h2>{props.desc}</h2>
      </div>
    )
  }
  