import React from 'react'
import { RxDragHandleDots2 } from 'react-icons/rx'
import ic1 from '../../Assets/Portfolios/1.png'
import ic2 from '../../Assets/Portfolios/2.png'
import ic3 from '../../Assets/Portfolios/3.png'
import ic4 from '../../Assets/Portfolios/4.png'
import ic5 from '../../Assets/Portfolios/5.png'

export default function Portfolio() {
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2 mb-10 mt-36' id='portfolio'><RxDragHandleDots2 />PORTFOLIO</span>
            <div className='grid grid-cols-2 gap-8 gap-y-16'>
                <div className='col-span-2 w-full rounded-lg'>
                    <img src={ic1} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='w-full rounded-lg'>
                    <img src={ic2} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='w-full rounded-lg'>
                    <img src={ic3} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='col-span-2 w-full rounded-lg'>
                    <img src={ic4} alt="portfolio" className='rounded-lg' />
                </div>
                <div className='col-span-2 w-full rounded-lg'>
                    <img src={ic5} alt="portfolio" className='rounded-lg' />
                </div>
            </div>
        </section>
    )
}
