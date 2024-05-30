import React from 'react'
import { SlHome } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { CgFileDocument, CgMenuRightAlt } from "react-icons/cg";
import { LiaShapesSolid } from "react-icons/lia";
import { RxDragHandleDots2 } from "react-icons/rx";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { Tooltip } from '@mui/material';

export default function NavMenu() {
  return (
    <ul className='border rounded-3xl w-fit px-2 py-3 hidden lg:flex flex-col gap-3'>
      <Tooltip title="Home" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#intro"><SlHome /></a></li></Tooltip>
      <Tooltip title="About" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#about"><GoPerson /></a></li></Tooltip>
      <Tooltip title="Resume" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#resume"><CgFileDocument /></a></li></Tooltip>
      <Tooltip title="Services" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#services"><CgMenuRightAlt /></a></li></Tooltip>
      <Tooltip title="Skills" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#skills"><LiaShapesSolid /></a></li></Tooltip>
      <Tooltip title="Portfolios" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#portfolio"><RxDragHandleDots2 /></a></li></Tooltip>
      <Tooltip title="Review" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#reviews"><BiMessageDetail /></a></li></Tooltip>
      <Tooltip title="Contact" placement="left" arrow><li className='hover:text-[#27d280] duration-200'><a href="#contact"><MdOutlineMail /></a></li></Tooltip>
    </ul>
  )
}
