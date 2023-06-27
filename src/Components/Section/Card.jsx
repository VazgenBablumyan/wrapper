import React, { useEffect, useState } from 'react'
import CardDetail from './CardDetail'
import "./card.css"
import ButtonShow from './ButtonShow'


export default function Card({ cards }) {
    const [card, setCard] = useState(false)
    const handleClick = (card) => {
        console.log(card.show)
        return setCard(card.show = !card.show)
    }
    return cards.map((card) => {
        return (
            <div key={card.id} className='card'>
                {card.show ? <CardDetail card={card} onClick={() => handleClick(card)}/> : <ButtonShow onClick={() => handleClick(card)} />}
            </div>
        )
    })
}
