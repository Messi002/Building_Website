import React from 'react'
import {archImages} from './Helper'
import Card from './Card'

function Section2() {
  return (
    <div id="projects" className='px-3' style={{padding:'40px 0 32px 0'}} >
         <div className='px-3'  >
    <h3 class=" " style={{padding:'16px 0 16px 0',borderBottom:"1px solid grey"}}> Projects</h3>
  </div>
 <div className='main'>
  <div className='mainArea py-3'>
    {
        archImages.map((arch,key)=>{
         return (
             <Card 
             key={key}
             image={arch.image} text={arch.text}/>
         )
        })
    } 
     </div> 
  </div>
    </div>
  )
}

export default Section2