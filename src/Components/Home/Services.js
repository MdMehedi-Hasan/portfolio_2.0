import React from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md';
import { VscDebugAll } from "react-icons/vsc";

export default function Services() {
    const services = [
        { title: 'Design', description: 'Create visually appealing and user-friendly interfaces for web applications.', icon: <MdOutlineDesignServices className='text-4xl' /> },
        { title: 'Development', description: 'Build robust and scalable front-end applications.', icon: <FaCode className='text-4xl' /> },
        { title: 'Bug Solving', description: 'Identify, troubleshoot, and fix issues in web applications.', icon: <VscDebugAll className='text-4xl' /> }
    ]
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2 mt-36' id='services'><CgMenuRightAlt />SERVICES</span>
            <h1 className='text-5xl mt-16 mb-10'>My <span className='text-primary'>Specializations</span></h1>
            <div className='flex flex-col gap-8'>
                {
                    services.map((item, index) =>
                        <div className='flex items-start justify-between gap-10 p-8 md:p-12 border border-neutral-500 group hover:border-[#28e98c] transition ease-in-out duration-200 rounded-3xl' key={index}>
                            <div>
                                <h4 className='text-2xl mb-3 group-hover:text-[#28e98c]'>{item.title}</h4>
                                <p className='text-sm text-neutral-400'>{item.description}</p>
                            </div>
                            <span className='text-4xl text-green-300'>{item.icon}</span>
                        </div>)
                }
            </div>
        </section>
    )
}
