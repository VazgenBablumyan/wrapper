import React, { useState } from 'react'
import CardDetail from './CardDetail'
import ButtonShow from './ButtonShow'
import "./card.css"



export default function Card({ cards }) {
    const [, setCard] = useState(false)
    const [, setCounter] = useState(0)
    const handleClick = (card) => {
        setCard(card.show = !card.show)
        return !card.show ? setCounter(card.counter+=1):null
         
    }
    return cards.map((card) => {
        return (
            <div key={card.id} className='card'>
                {card.show ? <CardDetail card={card} onClick={() => handleClick(card)}/> : <ButtonShow onClick={() => handleClick(card)} />}
            </div>
        )
    })
}
