import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import '../../Styles/CircularProject.css'

export default function Projects() {
    let textPath = `<textPath alignment-baseline="top" xlink:href="#circle" class="text">My Projects.My Projects.</textPath>`
    return (
        <div class="main">
            {/* <img src="https://www.kirupa.com/icon/1f354.svg" width="50" height="50" alt="" /> */}
            <FaArrowDownLong className="downArrow text-2xl" />
            <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                <defs>
                    <path id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                ">
                    </path>
                </defs>
                <text dangerouslySetInnerHTML={{ __html: textPath }} width="400"></text>;
            </svg>
        </div>
    )
}
