import React from 'react'

function Card({image,text}) {
  return (
    <div className='card'>
    <div style={{backgroundImage:`url(${image})`}}>
        <span className='imageText'>{text}</span>

    </div>

    </div>
  )
}

export default Card