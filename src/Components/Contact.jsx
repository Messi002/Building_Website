import React from 'react'

function Contact() {
  return (
    <div id="contact" className='px-3 contacts'  >

       
    <h3 class="" style={{padding:'16px 0 16px 0',borderBottom:"1px solid grey"}}> Contact</h3>
    <p>Lets get in touch and talk about your next project...
    </p>
  <form action="">

  <input type="text" placeholder="Name" required name="Name" />
      <input type="text" placeholder="Email" required name="Email" />
      <input type="text" placeholder="Subject" required name="Subject" />
      <input type="text" placeholder="Comment" required name="Comment" />
      <button class="btn1 bg-secondary" type="submit" style={{margin:'16px 0 16px 0'}}>
        <i class="fa fa-paper-plane"></i> SEND MESSAGE
      </button>


  </form>
    </div>
  )
}

export default Contact