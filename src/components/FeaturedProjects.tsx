import React from 'react'
import { FocusCards } from './ui/focus-cards'
import Link from 'next/link';

const projects = [
    {
      "title": "Quick AI",
      "img": "/ai potrait.png",
    },
    {
      "title": "ZCRUM - Project Management App",
      "img": "/zcrum potrait.png",
    },
    {
      "title": "Quick Chat App",
      "img": "/chat potrait.png",
    },
  ]

function FeaturedProjects() {
  
    const cards = projects.slice(0, 3).map(proj => ({
      title: proj.title,
      src: proj.img
    }))
  return (
    <div className='pb-5 px-2'>
        <h3 className='my-10 md:mt-2 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 p-5 text-center'>Featured Projects</h3>
        <Link href={"/projects"}>
            <FocusCards cards={cards} />
        </Link>
    </div>
  )
}

export default FeaturedProjects