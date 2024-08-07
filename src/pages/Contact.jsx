import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import Section from '../components/Section';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
          window.alert('Hmm, something went wrong: ', error.text);
        },
      );
  };

  return (
    <Section>
      <div className={`flex flex-col items-center justify-center w-full transition-opacity duration-500 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>
        <form
          ref={form}
          className='flex flex-col w-full gap-3 p-5 rounded-xl h-fit bg-slate-800 max-w-[665px] border-[1px] border-default lg:text-lg'
          onSubmit={sendEmail}>
          <div className='rounded-md'>
            Interested in working together? Please fill out the form below with your project or job details, and {`I'll`} be in touch as soon as possible to discuss further.
          </div>

          <hr className='my-5 border-alt' />

          <label htmlFor='from_name' className='font-bold'>Name</label>
          <input type='text' name='from_name' id='from_name' className='max-w-[250px] py-1 pl-2 rounded-md bg-slate-600 focus:outline-none focus:ring focus:ring-[#75a3ff] mb-5' />

          <label htmlFor='from_email' className='font-bold'>Email</label>
          <input type='email' name='from_email' id='from_email' className='rounded-md bg-slate-600 max-w-[250px] py-1 pl-2 mb-5 focus:outline-none focus:ring focus:ring-[#75a3ff]' />

          <label htmlFor='message' className='font-bold'>Message</label>
          <textarea name='message' id='message' className='h-44 py-2 pl-2 rounded-md  bg-slate-600 focus:outline-none focus:ring focus:ring-[#75a3ff]' />

          <input type='submit' value='Send' className='self-center px-5 pb-1 pt-2 md:px-6 md:pb-2 md:pt-3 mt-3 font-bold transition-all duration-300 rounded-full w-fit text-dark bg-alt hover:cursor-pointer hover:bg-[#5991ff] hover:text-[#1a1f2b]' />
        </form>
      </div>
    </Section>
  );
}