import React from 'react'
import { IoIosBriefcase } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoDash } from 'react-icons/go';

export default function Resume() {
    AOS.init();
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2 mt-36 mb-16' id='resume' data-aos="fade-up" data-aos-duration="1500"><IoIosBriefcase />RESUME</span>
            <h1 className='text-5xl mb-10' data-aos="fade-up" data-aos-duration="1500">Work <span className='text-primary'>Experience</span></h1>
            <ul>
                <li className='flex gap-5 group' data-aos="fade-left" data-aos-duration="1500">
                    <div className='flex flex-col items-center'>
                        <div className='w-3 h-3 bg-gray-400 rounded-full group-hover:bg-[#28e98c] transition ease-in-out duration-300'></div>
                        <div className='h-full w-[0.1px] bg-gray-400'></div>
                    </div>
                    <div className='mb-20'>
                        <h3 className='mb-5 text-gray-400 group-hover:text-[#28e98c] transition ease-in-out duration-300 text-xl'>2023 - Present</h3>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Develop an Ed-Tech platform from scratch.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Collaborate with backend developers for API integration.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Create new features for better user experience.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Integrate AI powered features like interactive chat-bot, resume builder, CV sorter, CV analysis etc.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Writing clean code for future reference and provide UI recommendation.</li>
                        </ul>
                    </div>
                </li>
                <li className='flex gap-5 group transition ease-in-out duration-300' data-aos="fade-left" data-aos-duration="1500">
                    <div className='flex flex-col items-center'>
                        <div className='w-3 h-3 bg-gray-400 rounded-full group-hover:bg-[#28e98c] transition ease-in-out duration-300'></div>
                        <div className='h-full w-[0.1px] bg-gray-400'></div>
                    </div>
                    <div>
                        <h3 className='mb-5 text-gray-400 group-hover:text-[#28e98c] transition ease-in-out duration-300 text-xl'>2022 - 2023</h3>
                        <ul className='flex flex-col gap-4'>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Building Interactive/Functional User Interfaces with Restful API.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Maintain projects with different libraries such as React, Vue.js etc.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Learned Vue.js, Socket.io & WebRTC which are used for making WhatsApp and Twitter alike chatting applications.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Adding new features to existing projects and optimizing them for better user experience.</li>
                            <li className='flex items-center gap-2'><span><GoDash /></span>Converting existing projects to React.js with better functionalities and integration with API. </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    )
}
