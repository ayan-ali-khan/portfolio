'use client';
import emailjs from 'emailjs-com';
import { MailIcon } from 'lucide-react';



function ContactSection() {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!, 
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,  
            form,
            process.env.NEXT_PUBLIC_PUBLIC_KEY)
        .then(() => {
            alert('Message sent!');
            form.reset();
        }, () => {
            alert('Failed to send message.');
        });
    };

    return (  
        <div className="w-full h-full">
            <form className="space-y-2 w-full h-full" onSubmit={sendEmail}>
                <div className='flex flex-col gap-4'>
                    <input 
                        type="text"
                        id='name'
                        name='name'
                        required
                        className='flex-1 px-2 py-2 rounded-md border border-grey hover:-translate-y-1 hover:shadow-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400' 
                        placeholder='Your Name'/>

                    <input 
                        type="email"
                        id='email'
                        name='email'
                        required
                        className='px-2 py-2 rounded-md border border-grey hover:-translate-y-1 hover:shadow-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400' 
                        placeholder='Your Email'/>

                    <textarea 
                        rows={2}
                        id='message'
                        name='message'
                        required
                        className='w-full md:w-auto px-2 py-1 rounded-md border border-grey font-semibold resize-none hover:-translate-y-1 hover:shadow-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400' 
                        placeholder='Your Message...'/>
                    <button 
                        type='submit' className='w-full md:w-auto py-2 rounded-lg transition shadow font-bold p-2 text-center cursor-pointer flex flex-row justify-center text-black gap-2 hover:-translate-y-1 hover:shadow-xl dark:text-gray-200 sm:text-[12px] md:text-[14px] lg:text-[16px]'>
                        Send Message <MailIcon />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactSection