import React from 'react'
import { GoPerson } from 'react-icons/go'

export default function About() {
    return (
        <div className='mt-36'>
            <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2' id="about" data-aos="fade-up" data-aos-duration="1500"><GoPerson />ABOUT</span>
            {/* <h1 className='text-6xl'>Every design deserves a better development. The proper execution can add more value to the design.</h1> */}
            <h1 className='text-5xl max-w-2xl mt-12' data-aos="fade-up" data-aos-duration="1500">Proper execution can add more value <span className='text-primary'>to the design</span>.</h1>
            <p className='text-secondary mt-5 mb-10' data-aos="fade-up" data-aos-duration="1500"> I bring over 3 years of experience, having recently worked at Interactive Cares and previously contributed to projects at Arena Web Security. Additionally, I've partnered with 35mm, a creative agency, on a notable project. My approach is marked by quiet confidence, innate curiosity, and a constant dedication to honing my design skills with each unique challenge I encounter.</p>
        </div>
    )
}
