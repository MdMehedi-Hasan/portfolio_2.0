import React from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'
import { FaCode } from 'react-icons/fa6'
import { MdOutlineDesignServices } from 'react-icons/md';
import { VscDebugAll } from "react-icons/vsc";

export default function Services() {
    const services = [
        { title: 'Development', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum ratione aspernatur amet ut eaque eius ducimus.Earum esse sed, illum voluptatem aperiam odio harum.Ut amet autem, alias itaque assumenda quasi nobis.', icon: <FaCode /> },
        { title: 'Design', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum ratione aspernatur amet ut eaque eius ducimus.Earum esse sed, illum voluptatem aperiam odio harum.Ut amet autem, alias itaque assumenda quasi nobis.', icon: <MdOutlineDesignServices /> },
        { title: 'Bug Solving', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nostrum ratione aspernatur amet ut eaque eius ducimus.Earum esse sed, illum voluptatem aperiam odio harum.Ut amet autem, alias itaque assumenda quasi nobis.', icon: <VscDebugAll /> }
    ]
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><CgMenuRightAlt />SERVICES</span>
            <h1>My Specializations</h1>
            <div className='flex flex-col gap-8'>
                {
                    services.map((item, index) =>
                        <div className='flex items-start gap-10 px-10 py-5 border border-green-300 rounded-lg' key={index}>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                            <span>{item.icon}</span>
                        </div>)
                }
            </div>
        </section>
    )
}
