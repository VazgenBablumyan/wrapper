import React from 'react'
import "./cardDetail.css"
export default function CardDetail({card, onClick}) {
  return (
    <div>
        <span className='cardNumber' >{card.number}</span>
        <button className='closeCard' onClick={onClick}>X</button>
    </div>
  )
}
