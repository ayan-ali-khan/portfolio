"use client";
import Link from 'next/link'
import Image from 'next/image'
import { TypingAnimation } from './ui/typing-animation';
import { WordRotate } from './ui/word-rotate';
import ContactSection from './ContactSection';
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { IconCloud } from "@/components/ui/icon-cloud"
import { ShineBorder } from "@/components/ui/shine-border"
import ProjectCarousel from './ProjectCards';

const slugs = [
  "typescript",
  "javascript",
  // "dart",
  // "java",
  "react",
  // "flutter",
  // "android",
  "html5",
  "nodedotjs",
  "express",
  "nextdotjs",
  "c++",
  // "prisma",
  "tailwindcss",
  "mongodb",
  "postman",
  "firebase",
  "postgresql",
  "vercel",
  "git",
  "github",
  // "amazonaws",
  // "nginx",
  // "testinglibrary",
  // "jest",
  // "cypress",
  // "docker",
  // "jira",
  // "gitlab",
  // "androidstudio",
  // "sonarqube",
  // "figma",
]

const words = ["Typescript", "Javascript", "React", "Node", "Express", "MongoDB", "PostgreSQL", "MySQL", "Tailwind", "Bootstrap", "Zustand", "React Router", "React Hook Form", "C++", "Python"]

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
)


function Tile({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`bg-white dark:bg-black dark:text-white dark:border dark:border-gray rounded-2xl p-4 shadow-sm transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      {/* <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/> */}
      {children}
    </div>
  )
}

export default function LandingGrid() {
  return (
    <div className="mx-auto w-full max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl px-2 md:px-2 py-6 md:py-10 ">
        <div className="hidden md:grid grid-cols-12 gap-2 auto-rows-min md:auto-rows-[120px] w-full dark:bg-black/25 dark:text-white">

          {/* qualities */}
          <Tile className="col-span-3 row-span-1 flex items-center justify-center">
            <TypingAnimation className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight line-clamp-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              Deliver quality work. On time.
            </TypingAnimation>
          </Tile>

        {/* Name */}
        <Tile className="col-span-6 row-span-1 flex items-center justify-center relative">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <div className='text-center'>
            <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">{"Hi, I'm Ayan"}</h1>
            <p className="mt-1 text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-800">Full Stack Web Developer</p>
          </div>
          <div className='absolute right-4 top-1/2 -translate-y-1/2'>
            <AnimatedThemeToggler/>
          </div>
        </Tile>

        <Tile className="col-span-3 row-span-1 flex items-center justify-center">
          <p className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 sm:text-lg md:text-xl lg:text-2xl leading-tight line-clamp-2">
            Upto 2x faster<br/>than other devs
          </p>
        </Tile>

        {/* Tech Stack */}
        <Tile className="col-span-2 row-span-1 flex items-center justify-center relative size-full overflow-hidden">
          <IconCloud images={images} />
        </Tile>

        {/* Languages */}
        <Tile className="col-span-1 row-span-1 flex items-center justify-center">
          <h1 className="font-bold dark:text-gray-200">
            <WordRotate words={words} />
          </h1>
        </Tile>

        {/* Project Card */}
        <Tile className="col-span-6 row-span-2 flex items-center justify-center">
          <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <Link href="/projects" className="block w-full h-full">
            <div className="w-full h-full flex items-center justify-center">
              <ProjectCarousel />
            </div>
          </Link>
        </Tile>

        {/* Socials */}
        <Tile className="col-span-1 row-span-1 flex items-center justify-center">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <Link href="https://github.com/ayan-ali-khan" target="_blank" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            <Image src="/github-light.png" alt="Github" width={90} height={90} className='dark:hidden'/>
            <Image src="/github-dark.png" alt="Github" width={90} height={90} className='hidden dark:block'/>
          </Link>
        </Tile>
        <Tile className="col-span-1 row-span-1 flex items-center justify-center">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <Link href="https://www.linkedin.com/in/ayan-ali-khan-a42417315" target="_blank" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            <Image src="/linkedin-light.png" alt="LinkedIn" width={90} height={90} className='dark:hidden'/>
            <Image src="/linkedin-dark.png" alt="LinkedIn" width={100} height={100} className='hidden dark:block'/>
          </Link>
        </Tile>
        <Tile className="col-span-1 row-span-1 flex items-center justify-center">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <Link href="https://drive.google.com/file/d/1DlYeEHv7Lv9PfGC3css7UvhccffKolmS/view" target="_blank" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            <Image src="/resume-light.png" alt="Resume" width={90} height={90} className='dark:hidden'/>
            <Image src="/resume-dark.png" alt="Resume" width={50} height={50} className='hidden dark:block'/>
          </Link>
        </Tile>
        

        <Tile className="col-span-3 row-span-2 flex items-center justify-center overflow-hidden max-w-xs max-h-[340px]">
            <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}/>
          <ContactSection />
        </Tile>

        {/* about me */}
        <Tile className="col-span-3 row-span-2 flex items-center justify-center">
          <TypingAnimation className="text-[15px] md:text-base lg:text-[17px] font-medium max-w-[92%] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-400 text-center leading-snug md:line-clamp-10">
            I’m a Web2 Full Stack Developer, currently building scalable SaaS applications. Beyond development, I enjoy problem-solving and learning new technologies. I also try to contribute to open source and developer ecosystem.
          </TypingAnimation>
        </Tile>

        {/* certify */}
        <Tile className="col-span-3 row-span-1 flex items-center justify-center">
          <ul className="text-[12px] md:text-base lg:text-[17px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 text-left w-full max-w-[92%]">
            <li>
              Data Analytics Essentials – Jun’24 
              <a href="https://www.credly.com/badges/d05e31ad-d0db-49b3-9f36-d60bb01f1d1f" className="underline ml-1" target="_blank" rel="noopener noreferrer">(link)</a>
            </li>
            <li>
              Python Essentials 1 – Sep’24 
              <a href="https://www.credly.com/badges/c4959d64-0fcd-4102-8177-14112d32ff6d" className="underline ml-1" target="_blank" rel="noopener noreferrer">(link)</a>
            </li>
          </ul>
        </Tile>

        {/* edu */}
        <Tile className="col-span-3 row-span-1 flex items-center justify-center">
          <div className="font-semibold text-[12px] md:text-[14px] lg:text-[17px] leading-snug bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 max-w-[98%]">
            SCRIET, CCS Uni, India<br />
            B.Tech Information Technology Engg.<br />
            Aug 2022 – Jun 2026 (Expected)
          </div>
        </Tile>

      </div>

      {/* Fall Smaller Screen */}
      <div className="md:hidden flex flex-wrap gap-3">

        {/* Name */}
        <Tile className="w-full text-center relative">
          <div className='text-center'>
            <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">{"Hi, I'm Ayan"}</h1>
            <p className="mt-1 text-sm md:text-base font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-800">Full Stack Web Developer</p>
          </div>
          <div className='absolute right-4 top-1/2 -translate-y-1/2'>
            <AnimatedThemeToggler/>
          </div>
        </Tile>
        
        {/* Project Card */}
        <Tile className="w-full text-center max-h-[350px]">
          <Link href="/projects" className="block w-full h-full">
            <div className="w-full h-full flex items-center justify-center">
              <ProjectCarousel />
            </div>
          </Link>
        </Tile>

        {/* Socials */}
        <Tile className="flex-1 min-w-[5%] max-w-[12%] text-center">
          <Link href="https://github.com/ayan-ali-khan" target="_blank" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            <Image src="/github-light.png" alt="Github" width={40} height={40} className='dark:hidden'/>
            <Image src="/github-dark.png" alt="Github" width={40} height={40} className='hidden dark:block'/>
          </Link>
        </Tile>
        <Tile className="flex-1 min-w-[5%] max-w-[12%] text-center">
          <Link href="https://www.linkedin.com/in/ayan-ali-khan-a42417315" target="_blank" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            <Image src="/linkedin-light.png" alt="LinkedIn" width={45} height={45} className='dark:hidden'/>
            <Image src="/linkedin-dark.png" alt="LinkedIn" width={50} height={50} className='hidden dark:block'/>
          </Link>
        </Tile>
        <Tile className="flex-1 min-w-[5%] max-w-[12%] text-center">
          <Link href="https://drive.google.com/file/d/1DlYeEHv7Lv9PfGC3css7UvhccffKolmS/view" target="_blank" className="font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900">
            <Image src="/resume-light.png" alt="Resume" width={45} height={45} className='dark:hidden'/>
            <Image src="/resume-dark.png" alt="Resume" width={40} height={40} className='hidden dark:block'/>
          </Link>
        </Tile>

        {/* Tech Stack */}
        <Tile className="flex min-w-[10%] max-w-[60%] min-h-[50px] max-h-[85px] items-center justify-center relative size-full overflow-hidden">
          <IconCloud images={images} />
        </Tile>

        {/* Languages */}
        <Tile className="flex-1 min-w-[24%]">
          <h1 className="font-bold dark:text-gray-200 text-center text-xl">
            <WordRotate words={words} />
          </h1>
        </Tile>
        
        {/* certifi */}
        <Tile className="flex-1 min-w-[44%] text-center">
          <ul className="text-[14px] md:text-base lg:text-[17px] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 text-left w-full max-w-[92%]">
            <li>
              Data Analytics Essentials – Jun’24 
              <a href="https://www.credly.com/badges/d05e31ad-d0db-49b3-9f36-d60bb01f1d1f" className="underline ml-1" target="_blank" rel="noopener noreferrer">(link)</a>
            </li>
            <li>
              Python Essentials 1 – Sep’24 
              <a href="https://www.credly.com/badges/c4959d64-0fcd-4102-8177-14112d32ff6d" className="underline ml-1" target="_blank" rel="noopener noreferrer">(link)</a>
            </li>
          </ul>
        </Tile>

        
        {/* edu */}
        <Tile className="flex-1 min-w-[44%] text-center">
          <div className="font-semibold text-[14px] md:text-[14px] lg:text-[17px] leading-snug bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-900 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 max-w-[98%]">
            SCRIET, CCS Uni, India<br />
            B.Tech Information Technology Engg.<br />
            Aug 2022 – Jun 2026 (Expected)
          </div>
        </Tile>

        {/* contact */}
        <Tile className="w-full overflow-hidden max-h-[300px]">
          <ContactSection />
        </Tile>

        
        {/* qualities */}
        <Tile className="flex-1 min-w-[44%]">
          <TypingAnimation className="text-[10px] md:text-[13px] lg:text-[14px] font-medium max-w-[92%] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-400 text-center leading-snug md:line-clamp-10">
            I’m a Web2 Full Stack Developer, currently building scalable SaaS applications. Beyond development, I enjoy problem-solving and learning new technologies. I also try to contribute to open source and developer ecosystem.
          </TypingAnimation>
        </Tile>
      </div>
    </div>
  )
}