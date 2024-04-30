import React from 'react'
import { FaFigma, FaNodeJs, FaReact } from 'react-icons/fa6'
import { IoLogoGithub, IoLogoJavascript } from 'react-icons/io'
import { LiaShapesSolid } from 'react-icons/lia'
import { BsBrowserChrome } from "react-icons/bs";
import { DiBootstrap } from "react-icons/di";
import { SiMui, SiTailwindcss } from "react-icons/si";

export default function Skills() {
    const skills = [
        { title: 'JavaScript', level: '', icon: <IoLogoJavascript className='text-6xl' /> },
        { title: 'React', level: '', icon: <FaReact className='text-6xl' /> },
        { title: 'Node', level: '', icon: <FaNodeJs className='text-6xl' /> },
        { title: 'Bootstrap', level: '', icon: <DiBootstrap className='text-6xl' /> },
        { title: 'Tailwindcss', level: '', icon: <SiTailwindcss className='text-6xl' /> },
        { title: 'Material UI', level: '', icon: <SiMui className='text-6xl' /> },
        { title: 'Figma', level: '', icon: <FaFigma className='text-6xl' /> },
        { title: 'Github', level: '', icon: <IoLogoGithub className='text-6xl' /> }
    ]
    return (
        <div>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2 mb-5 mt-24' id='skills'><LiaShapesSolid />SKILLS</span>
            <h1 className='text-5xl mt-8 mb-16'>My <span className='text-primary'>Skills</span></h1>
            <div className='grid grid-cols-4 gap-y-10'>
                {
                    skills.map((item, index) => <div key={index} className='flex flex-col items-center gap-2'>
                        <span className='border border-gray rounded-full py-16 px-10'>{item.icon}</span>
                        {item.title}
                    </div>)
                }
            </div>
        </div>
    )
}
