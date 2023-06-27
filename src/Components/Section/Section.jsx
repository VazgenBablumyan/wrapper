import React, { useState } from 'react'
import Card from './Card'
import './section.css'
import Report from './Report'

export default function ({cards}) {
  const [showReport, setShowReport] = useState(false)
    const handleClick =() => setShowReport(!showReport)
  return (
    <div className='section'>
        <Card cards = {cards} />
        <button className='report'onClick={handleClick}>Report</button>
        {!showReport ? <Report />: null}
    </div>
  )
}
