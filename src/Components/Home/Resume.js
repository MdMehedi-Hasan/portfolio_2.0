import React from 'react'
import { IoIosBriefcase } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
    AOS.init();
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2 mt-36 mb-16' id='resume'><IoIosBriefcase />RESUME</span>
            <h1 className='text-5xl mb-10'>Work <span className='text-primary'>Experience</span></h1>
            <ul>
                <li className='flex gap-5' data-aos="fade-left">
                    <div className='flex flex-col items-center'>
                        <div className='w-3 h-3 bg-white rounded-full'></div>
                        <div className='h-full w-[0.1px] bg-white'></div>
                    </div>
                    <div className='mb-20'>
                        <h3>2020-Present</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Nostrum ratione aspernatur amet ut eaque eius ducimus.</li>
                            <li>Earum esse sed, illum voluptatem aperiam odio harum.</li>
                            <li>Ut amet autem, alias itaque assumenda quasi nobis.</li>
                            <li>Expedita amet molestias cumque enim esse! Labore, nulla!</li>
                        </ul>
                    </div>
                </li>
                <li className='flex gap-5' data-aos="fade-left">
                    <div className='flex flex-col items-center'>
                        <div className='w-3 h-3 bg-white rounded-full'></div>
                        <div className='h-full w-[0.1px] bg-white'></div>
                    </div>
                    <div>
                        <h3>2020-Present</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>Nostrum ratione aspernatur amet ut eaque eius ducimus.</li>
                            <li>Earum esse sed, illum voluptatem aperiam odio harum.</li>
                            <li>Ut amet autem, alias itaque assumenda quasi nobis.</li>
                            <li>Expedita amet molestias cumque enim esse! Labore, nulla!</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    )
}
