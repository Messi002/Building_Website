import React from 'react'

function Card2({image,text1,text2,text3}) {
  return (
    <div className='card2'>
    <div style={{backgroundImage:`url(${image})`}}></div>
    <h3>{text1}</h3>
      <p className='opacity-50'>{text2}</p>
      <p>{text3}</p>
      <p className='d-flex justify-content-center' ><button class="btn1 text-white bg-secondary d-block w-75" style={{borderRadius:'20px 20px'}}>Contact</button></p>
    </div>
  )
}

export default Card2