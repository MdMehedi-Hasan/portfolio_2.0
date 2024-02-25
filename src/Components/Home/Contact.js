import React, { useRef } from 'react';
import { MdOutlineMail } from 'react-icons/md'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm('service_rer1xnh', 'template_nq7m1jp', form.current, 'wfuR25bNJNfLybGiz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className='mb-10 mt-10'>
      <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><MdOutlineMail />CONTACT</span>
      <h1 className='text-5xl tracking-wider leading-snug mb-5 mt-10'>Get In <span className='text-primary'>Touch</span></h1>
      <span className='text-xl'>mdmehedihasan9874@gmail.com</span>
      <form ref={form} onSubmit={sendEmail} className='grid grid-cols-2 gap-10 mt-16'>
        <div className='flex flex-col gap-5'>
          <label>Name</label>
          <input type="text" name="from_name" className='bg-transparent outline-none border-b' placeholder='Your Name' />
        </div>
        <div className='flex flex-col gap-5'>
          <label>Email</label>
          <input type="email" name="from_email" className='bg-transparent outline-none border-b' placeholder='Email Address' />
        </div>
        <div className='flex flex-col gap-5 col-span-2'>
          <label>Phone</label>
          <input type="text" name="from_number" className='bg-transparent outline-none border-b' placeholder='Phone Number' />
        </div>
        <div className='flex flex-col gap-5 col-span-2'>
          <label>Message</label>
          <textarea name="message" className='bg-transparent outline-none border-b' placeholder='Write Your Message' />
        </div>
        <div className='flex justify-end col-span-2'>
          <input type="submit" value="SEND MESSAGE" className='bg-green-400 rounded-full px-10 py-3 cursor-pointer' />
        </div>
      </form>
    </div>
  )
}
