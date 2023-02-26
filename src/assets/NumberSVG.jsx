import React from 'react';

export default function NumberSVG(props) {
  return (
    <div>
      <svg width={props.width} height={props.height}>
        <rect x="0" y="0" width={props.width} height={props.height} fill="white" />
        <text x={props.width/2} y={props.height/2 + 19} font-size={props.height*0.8} text-anchor="middle" fill="black">{props.number}</text>
      </svg>
    </div>
  );
}
