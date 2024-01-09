import React from 'react'
// import profile from '../../Assets/profile.png'
import profile from '../../Assets/test.jpg'
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import '../../Styles/Sideprofile.css'

export default function SideProfile() {
    /* https://twitter.com/mehedirhasan */
    return (
        <div className='border border-white rounded-xl p-3 sideProfile'>
            <div className='w-full h-fit bg-white rounded-lg flex items-end justify-center'>
                <img src={profile} alt="Profile" className='w-2/4'/>
            </div>
            <p></p>
            <ul className='flex items-center justify-center gap-3 mt-5'>
                <li className='border border-slate-100 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://www.linkedin.com/in/mehedi5/" _blank><FaLinkedinIn /></a></li>
                <li className='border border-slate-100 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://github.com/MdMehedi-Hasan" _blank><FaGithub /></a></li>
                <li className='border border-slate-100 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://stackoverflow.com/users/18447905/mehedi-hasan" _blank><FaStackOverflow /></a></li>
                <li className='border border-slate-100 rounded-md p-2 text-slate-100 cursor-pointer'><a href="https://twitter.com/mehedirhasan" _blank><RiTwitterXFill /></a></li>
            </ul>
        </div>
    )
}
