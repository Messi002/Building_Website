import React from 'react'
import Arch from '../arch img/architect.jpg'


function Section1() {
  return (
    <header id='home' >
<img src={`${Arch}`} alt=""  style={{width:'100%',position:'relative'}}/>
<div class="text-center tex">	
    <h1 class="text-white"><span style={{padding:'8px 16px',backgroundColor:'black',opacity:'0.75' }}><b>BR</b>
    </span> <span class="right text-grey">Architects</span></h1>
  </div>
    </header>
  )
}

export default Section1