import React from 'react'

function Contact() {
    async function CopyEmail(){    
        await navigator.clipboard.writeText("hamzaataariq12@gmailcom");
        alert("Email Copied!");
    }

    

  return (
    <>
      <h1 id='contact-section' className='font-bold text-4xl text-orange-700 mt-10 mx-10'>Contact me</h1>
      <div className='mx-16 py-2 font-semibold cursor-pointer' onClick={CopyEmail}>
      <p>You can Contact me at</p>
      <p>hamzaataariq12@gmail.com</p>
      </div>

      {/* Form */}
      <form action="https://formspree.io/f/xgveagqg" method="POST" className='mx-8 md:mx-32'>
        <label className='font-semibold text-orange-600'>Name</label><br />
        <input className='bg-orange-200 w-full md:w-10/12 my-2 h-12 p-4 caret-orange-600 rounded-md' type="text" name="name" required placeholder='Enter Your Name' /><br />
        <label className='font-semibold text-orange-600'>Email</label><br />
        <input className='bg-orange-200 w-full md:w-10/12 my-2 h-12 p-4 caret-orange-600 rounded-md' type="email" name="email" required placeholder='Enter Your Email'/><br />
        <label className='font-semibold text-orange-600'>Your Message</label><br />
        <textarea className='bg-orange-200 w-full md:w-10/12 my-2 h-36 p-4 caret-orange-600 rounded-md' name="message" required placeholder='Enter Your Message'></textarea><br />
        <input className='bg-orange-600 p-3 rounded-lg text-white hover:bg-orange-500 cursor-pointer' type="submit" name="" id="" />
      </form>

      <p className='text-center text-orange-600 font-semibold my-4'>Copyright © 2024 Ameer Hamza All Rights Reserved</p>
    </>
  )
}

export default Contact;