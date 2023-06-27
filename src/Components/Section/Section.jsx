import React, { useState } from 'react'
import Card from './Card'
import './section.css'

export default function ({cards}) {

  return (
    <div className='section'>
        <Card cards = {cards} />
    </div>
  )
}
