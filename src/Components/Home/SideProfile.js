import React, { useState } from 'react'
// import profile from '../../Assets/profile.png'
import profile from '../../Assets/profile2.png'
// import profile from '../../Assets/test.jpg'
import { FaDev, FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import '../../Styles/Sideprofile.css'
import HireModal from '../Common/HireModal';

export default function SideProfile() {
    const [open, setOpen] = useState(false);
    return (
        <div className='border border-neutral-500 rounded-xl p-3 h-fit mt-3'>
            <HireModal open={open} setOpen={setOpen} />
            <span className='flex gap-1 text-2xl mt-2 mb-5'>Mehedi <sup className='border rounded-full w-5 h-5 text-xs flex items-center justify-center font-normal'>M</sup></span>
            <div className='w-full h-fit bg-gradient-to-r from-zinc-400 via-gray-300 to-zinc-400 rounded-lg flex items-end justify-center'>
                <img src={profile} alt="Profile" className='w-2/4' />
            </div>
            <h1 className='px-3 text-lg text-center mt-5'>Md. Mehedi Hasan <br /> Front-End Developer</h1>
            <ul className='flex items-center justify-center gap-3 my-5'>
                <li className='border border-neutral-500 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://www.linkedin.com/in/mehedi5/" _blank><FaLinkedinIn /></a></li>
                <li className='border border-neutral-500 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://github.com/MdMehedi-Hasan" _blank><FaGithub /></a></li>
                <li className='border border-neutral-500 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://stackoverflow.com/users/18447905/mehedi-hasan" _blank><FaStackOverflow /></a></li>
                <li className='border border-neutral-500 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://twitter.com/mehedirhasan" _blank><RiTwitterXFill /></a></li>
            </ul>
            <p className='text-xs text-center text-slate-200'>Hello folks, I am Md. Mehedi Hasan a professional front-end developer with more than 3<sup>+</sup> years of working experience.</p>
            <div className='flex justify-center mt-5'>
                <button className='bg-primary rounded-full w-2/3 py-2 text-black' onClick={() => setOpen(true)}>Hire Me!</button>
            </div>
        </div>
    )
}
