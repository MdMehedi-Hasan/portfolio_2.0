import React from 'react'
import { SlHome } from 'react-icons/sl'
import Projects from '../Common/Projects'

export default function Intro() {
    return (
        <div className="mt-20">
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2' id="intro"><SlHome />INTRODUCTION</span>
            <h1 className='text-6xl mt-8 tracking-wider leading-snug'>Say Hi from <span className='text-primary'>Mehedi</span>,</h1>
            <h1 className='text-6xl tracking-wider leading-snug'>Professional Front-end Developer</h1>
            {/* <p className='mt-3 text-secondary text-lg'>Everyone has the right to freedom of thought. <br /> I give your thought to life...</p> */}
            <p className='mt-5 text-secondary text-lg'>Unleashing Imagination, Crafting Realities...</p>
            <div className='flex justify-end'>
                <Projects />
            </div>
            <div className='flex items-center gap-20'>
                <div>
                    <h5 className='text-6xl text-primary mb-5'>02+</h5>
                    <p className='text-secondary'>YEARS OF <br /> EXPERIENCE</p>
                </div>
                <div>
                    <h5 className='text-6xl text-primary mb-5'>25+</h5>
                    <p className='text-secondary'>PROJECTS <br /> COMPLETED</p>
                </div>
            </div>
        </div>
    )
}
