import React from 'react'
import { GoPerson } from 'react-icons/go'

export default function About() {
    return (
        <div className='mt-36'>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><GoPerson />ABOUT</span>
            {/* <h1 className='text-6xl'>Every design deserves a better development. The proper execution can add more value to the design.</h1> */}
            <h1 className='text-4xl max-w-xl mt-12'>Proper execution can add more value to the design.</h1>
            <p className='text-secondary mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore exercitationem praesentium dolore? Veniam, suscipit quam illo in quibusdam optio dolore necessitatibus quisquam exercitationem commodi nobis officia repellendus magni quis temporibus explicabo dolor quos laborum ratione, consequatur aperiam. Ducimus sint architecto tempora nemo assumenda odio reprehenderit molestias magnam et provident!</p>
        </div>
    )
}
