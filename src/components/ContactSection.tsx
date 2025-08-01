'use client';
import { IconBrandLinkedin, IconBrandTwitter, IconBrandX, IconMail, IconSend, IconTerminal, IconX } from '@tabler/icons-react';
import Link from 'next/link'

function ContactSection() {
  return (
    <div>
        <section className='py-10 px-6 relative justify-center text-center'>
            <h2 className='mt-15 md:mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-3 text-center'>Get In Touch</h2>

            <div className='flex justify-center gap-5'>
                
                    <Link
                        href="mailto:ayanalikhan154@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <IconMail size={35} color='orange'/>
                    </Link>
                    
                    <Link
                        href="https://github.com/ayan-ali-khan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <IconTerminal size={35} color='lightgreen'/>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/ayan-ali-khan-a42417315"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <IconBrandLinkedin size={35} color='lightblue' />
                    </Link>

                    <Link
                        href="https://x.com/Ayanislow"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <IconBrandX size={35} />
                    </Link>
            </div>
        </section>
        
        <section id='contact' className='w-full max-w-xl mx-auto py-16 px-4 md:px-8 '>
            <h2 className='mt-15 md:mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-3 text-center'>Send a Message</h2>

            <p className='font-normal text-base text-center mb-8 md:text-lg text-neutral-300 max-w-lg mx-auto mb-4'>Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new oppurtunities.</p>

            
            <form action="" className='space-y-6'>
                <div className='flex flex-col gap-4'>
                    <input 
                        type="text"
                        id='name'
                        name='name'
                        required
                        className='flex-1 px-4 py-3 rounded-md border border-grey focus:outline-none focus:ring-2 focus:ring-grey transition' 
                        placeholder='Your Name'/>

                    <input 
                        type="email"
                        id='email'
                        name='email'
                        required
                        className='px-4 py-3 rounded-md border border-grey focus:outline-hidden focus:ring-2 focus:ring-grey' 
                        placeholder='Your Email'/>

                <textarea 
                    rows={4}
                    id='message'
                    name='message'
                    required
                    className='w-full md:w-auto px-3 py-3 rounded-md border border-grey font-semibold focus:outline-hidden focus:ring-2 focus:ring-grey transition' 
                    placeholder='Your Message...'/>
                <button 
                    type='submit' className='w-full md:w-auto px-8 py-3 rounded-lg transition shadow font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 p-3 text-center cursor-pointer flex flex-row justify-center text-black gap-2'>
                    Send Message <IconSend />
                </button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default ContactSection