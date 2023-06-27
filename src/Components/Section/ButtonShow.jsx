import React from 'react'

 
export default function ButtonShow({onClick}) {
  return (
    <div>
        <button className='showText' onClick={onClick}> SHOW </button>
    </div>
  )
}
