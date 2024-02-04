import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import '../../Styles/CircularProject.css'
import project from '../../Assets/round-text.png'

export default function Projects() {
    return (
            <a href="/" className='w-fit border rounded-full p-3 relative'>
                <img src={project} alt="" className='rotating-image' />
                <FaArrowDownLong className="text-3xl absolute top-0 bottom-0 right-0 left-0 m-auto" />
            </a>
    )
}
