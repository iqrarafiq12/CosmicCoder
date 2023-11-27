'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from './ui/separator';
import { useRouter } from 'next/navigation'

const gridItems = [
    {
        imageSrc: "/virus.png",
        title: "What is Covid-19",
        description:
            "Covid-19 Corona Virus disease is an infectious disease caused by a newly discovered coronavirus.",
    },
    {
        imageSrc: "/symptoms.png",
        title: "What are its Symptoms",
        description:
            "The Covid-19 virus affects different people in different ways. The severity of the disease varies from person to person.",
    },
    {
        imageSrc: "/prevent.png",
        title: "How can you prevent it?",
        description:
            "There's no currently vaccine to prevent you from getting Covid-19.But applying masks and social distancing can help stop the spread of the virus.",
    },
];
const Hero = () => {
    const router = useRouter()
    return (
        <div className='min-h-screen flex flex-col justify-between items-center mx-auto py-3 max-w-7xl px-5 gap-10 '>
            <div className='flex flex-col sm:flex-row items-center justify-between'>
                <div className='flex flex-col gap-5 max-w-xl'>
                    <h1>Covid-19 Screening Tool</h1>
                    <p>Use this self assesment tool to help determine whetever you need to be tested Covid-19 <br /><br />  You can complete this assesment for yourself or on behalf of someone else, if they are not able.</p>
                    <Button onClick={() => router.push('/asking')} className='bg-blue-600 hover:bg-blue-800 flex items-center justify-center mx-auto w-full h-full transition-all'>Get started</Button>
                </div>
                <div className=''><Image src="/Hero.jpeg" alt='heropng' width={500} height={500} /></div>
            </div>

            <div className='flex flex-col w-fullbg-slate-300 max-w-7xl gap-10 p-10 sm:px-10'>
                <div>
                    <h2>More Information</h2>
                </div>
                <div className='grid sm:grid-cols-3 gap-10 '>
                    {gridItems.map((item, index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-10 '>
                            <div className='flex'>
                                <div className='flex flex-col'>
                                    <Image src={item.imageSrc} width={100} height={100} alt='logo' />
                                    <h3>{item.title}</h3>
                                    <p className='max-w-md line-clamp-3'>{item.description}</p>
                                </div>
                                <Separator orientation='vertical' className='hidden sm:flex mx-3' />
                            </div>
                            <Separator className='flex sm:hidden' />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Hero