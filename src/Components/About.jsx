import React from 'react'
import { profileImage } from './Helper1'
import Card2 from './Card2'

function About() {
  return (
    <div id="about" className='px-3' style={{padding:'40px 0 32px 0'}} >
         <div className='mx-4'  >
    <h3 class=" " style={{padding:'16px 0 16px 0',borderBottom:"1px solid grey"}}> About</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
<div className='main'>
  <div className='mainArea'>
   {
       profileImage.map((profile,key)=>{
         return (
             <Card2 key={key} image={profile.image} 
             text1={profile.text1} text2={profile.text2}
             text3={profile.text3}/>
         )
       })
   }
   </div>   
  </div>
    </div>
  )
}

export default About