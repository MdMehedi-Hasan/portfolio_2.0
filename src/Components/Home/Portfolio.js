import React from 'react'
import { RxDragHandleDots2 } from 'react-icons/rx'

export default function Portfolio() {
    return (
        <section>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><RxDragHandleDots2 />PORTFOLIO</span>
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-green-600 h-36 w-full rounded-lg'></div>
                <div className='bg-red-600 h-36 w-full rounded-lg'></div>
                <div className='bg-blue-600 h-36 w-full col-span-2 rounded-lg'></div>
                <div className='bg-purple-600 h-36 w-full rounded-lg'></div>
                <div className='bg-cyan-600 h-36 w-full rounded-lg'></div>
            </div>
        </section>
    )
}
