'use client';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projects from '@/data/projects.json';
import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import Image from "next/image";

function page() {
  return (
    <div className='min-h-screen bg- py-12 pt-26 dark:bg-black/97 dark:text-white'>
        <h1 className='mt-20 md:my-2 text-4xl md:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>All Projects</h1>

        <div className='flex flex-wrap justify-center'>
            {projects.projects.map((proj) => (

                <CardContainer className="inter-var p-2" key={proj.id}>
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                        {proj.title}
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                        {proj.techStack}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={proj.img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                            <Link href={proj.live}>
                                Live →
                            </Link>
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-2 py-2 rounded-3xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            <Link href={proj.repo}>
                            <IconBrandGithub/>
                            </Link>
                        </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    </div>
  )
}

export default page