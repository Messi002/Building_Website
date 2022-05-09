import React from 'react'

function Navbar() {
  return (
    <div className=' bg-white Navbar1 py-2' style={{width:'100%'}}>
<div className='float-start'>
<a href="#home" class="btn1"><b>BR</b> Architects</a>
</div>


<div className='float-end right'>
<a href="#projects" class="btn1">Projects</a>
      <a href="#about" class="btn1">About</a>
      <a href="#contact" class="btn1">Contact</a>

</div>

    </div>
  )
}

export default Navbar