import React from 'react'
import { RxDragHandleDots2 } from 'react-icons/rx'
import ic1 from '../../Assets/Portfolios/1.png'
import ic2 from '../../Assets/Portfolios/2.png'
import ic3 from '../../Assets/Portfolios/3.png'

export default function Portfolio() {
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><RxDragHandleDots2 />PORTFOLIO</span>
            <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-2 w-full rounded-lg'>
                    <img src={ic1} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='w-full rounded-lg'>
                    <img src={ic2} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='w-full rounded-lg'>
                    <img src={ic3} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='col-span-2 bg-purple-600 h-36 w-full rounded-lg'></div>
                <div className='col-span-2 bg-cyan-600 h-36 w-full rounded-lg'></div>
            </div>
        </section>
    )
}
