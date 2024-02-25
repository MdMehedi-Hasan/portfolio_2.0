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
    <div>
      <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><MdOutlineMail />CONTACT</span>
      <form ref={form} onSubmit={sendEmail} className='text-black'>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Phone</label>
        <input type="text" name="from_number" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}
