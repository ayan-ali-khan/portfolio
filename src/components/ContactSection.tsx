'use client';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function ContactSection() {
  return (
    <div>
        <section className='pt-15 pb-10 px-6 relative justify-center text-center'>
            <h2 className='mt-15 md:mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-3 text-center'>Get In Touch</h2>

            <div className='flex justify-center gap-5'>
                
                    <Link href={'mailto:hello@gmail.com'}>
                        <Mail size={45}></Mail>
                    </Link>
                <Mail></Mail>
            </div>
        </section>
        
        <section className='pt-15 pb-10 px-6 relative'>
            <h2 className='mt-15 md:mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-3 text-center'>Get In Touch</h2>

            <p className='font-normal text-base text-center md:text-lg text-neutral-300 max-w-lg mx-auto'>Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discussing new oppurtunities.</p>


        </section>
    </div>
  )
}

export default ContactSection