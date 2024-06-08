import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import emailjs from '@emailjs/browser';

import Section from '../components/Section';

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target.from_name.value === '' || e.target.from_email.value === '' || e.target.message.value === '') {
      window.alert('Please fill out all fields');
      return;
    }

    emailjs
      .sendForm('service_8v2r8zd', 'template_cghpgmr', form.current, {
        publicKey: 'SkzG11bG1HK1u2Np4',
      })
      .then(
        () => {
          navigate('/confirmation');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Section>
      <div className='flex flex-col items-center justify-center w-full h-[90vh]'>
        <form
          ref={form}
          className='flex flex-col w-full gap-3 p-5 rounded-xl h-fit bg-slate-800 max-w-[665px] my-5 border-[1px] border-[#a1ceff]'
          onSubmit={sendEmail}>
          <p className='text-sm rounded-md sm:text-base md:text-lg bg-slate-800'>
            Interested in working together? Please fill out the form below with your project or job details, and {`I'll`} be in touch as soon as possible to discuss further.
          </p>

          <hr className='my-5 border-[#d4ebff]' />

          <label htmlFor='from_name' className='font-bold'>Name</label>
          <input type='text' name='from_name' id='from_name' className='text-base max-w-[250px] py-1 pl-2 rounded-md bg-slate-600 focus:outline-[#a1ceff] mb-5' />

          <label htmlFor='from_email' className='font-bold'>Email</label>
          <input type='email' name='from_email' id='from_email' className='text-base rounded-md bg-slate-600 max-w-[250px] py-1 pl-2 focus:outline-[#a1ceff] mb-5' />

          <label htmlFor='message' className='font-bold'>Message</label>
          <textarea name='message' id='message' className='text-base h-44 py-2 pl-2 rounded-md  bg-slate-600 focus:outline-[#a1ceff]' />

          <input type='submit' value='Send' className='text-[#a1ceff] self-center px-6 pt-3 py-2 mt-3 rounded-md w-fit hover:text-[#38435c] hover:bg-[#a1ceff] font-bold text-lg transition-all duration-300 bg-slate-600 hover:cursor-pointer' />
        </form>
      </div>
    </Section>
  );
}