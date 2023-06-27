import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './report.css'

export default function Report({cards}) {
    const v4Id = uuidv4()
    return cards.map((card) => {
  return (
    <div key ={v4Id} className='reportDetail'>
        <span>Card Number {card.number} unmounted  {card.counter} times </span>
    </div>
  )
})
}
