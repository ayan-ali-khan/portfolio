import Link from 'next/link'
import { Spotlight } from './ui/spotlight'
import { Button } from './ui/moving-border'
import { FlipWords } from '@/components/ui/flip-words';

function HeroSection() {
    const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div className='h-auto md:h-[30rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-1 md:py-3'>

        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="lightblue"
        />

        <div className='p-2 relative z-10 w-full text-center '>
            <h1 className='mt-20 md:mt-2 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Full Stack Developer
                {/* <FlipWords words={words} className='font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'/> */}
            </h1>
            
            <p
            className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
            >Web Developer with a Bachelor of Technology in Information Technology, holding Cisco certifications in Data Analytics and Python. Demonstrates strong problem-solving abilities in Data Structures, Algorithms, and modern Web Development technologies.</p>

            <div className='mt-4'>
                <Link href={"https://drive.google.com/file/d/1DlYeEHv7Lv9PfGC3css7UvhccffKolmS/view"} target='blank'>
                    <Button borderRadius='1.75rem'
                    className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer'>
                        Resume/CV
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection