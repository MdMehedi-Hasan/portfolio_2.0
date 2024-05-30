import React, { useRef } from 'react'
import { Button, SwipeableDrawer, Tooltip } from '@mui/material';
import { HiMenuAlt4 } from "react-icons/hi";
import NavMenu from '../Common/NavMenu';
import Intro from './Intro';
import About from './About';
import Resume from './Resume';
import Services from './Services';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import Contact from './Contact';
import { SlHome } from 'react-icons/sl';
import { GoPerson } from 'react-icons/go';
import { CgFileDocument, CgMenuRightAlt } from 'react-icons/cg';
import { LiaShapesSolid } from 'react-icons/lia';
import { RxDragHandleDots2 } from 'react-icons/rx';
import { BiMessageDetail } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { RiTwitterXFill } from 'react-icons/ri';


export default function MainContent() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='text-white relative lg:pl-10'>
            {/*  */}
            <button onClick={() => setOpen(true)} className='border border-gray rounded-full p-2 text-xl fixed top-5 right-10 z-10'>
                <HiMenuAlt4 />
            </button>
            <div className='fixed top-0 bottom-0 right-10 w-fit flex flex-col justify-center'>
                <NavMenu />
            </div>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                PaperProps={{
                    sx: {
                        backgroundColor: "#191919",
                        color: "white",
                        width: '350px'
                    }
                }}
                BackdropProps={{ style: { backgroundColor: '#565656', opacity: '0.5' } }}
            >
                <div className='flex items-center justify-center'>
                    <div className='w-fit mt-16'>
                        <h4 className='text-secondary text-xl mb-8 ml-3'>Menu</h4>
                        <ul className='w-36 px-2 py-3 flex flex-col gap-3'>
                            <li className='text-secondary hover:text-white duration-200'><a href="#intro" className='flex items-center gap-2'><SlHome className='text-primary' />Home</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#about" className='flex items-center gap-2'><GoPerson className='text-primary' />About</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#resume" className='flex items-center gap-2'><CgFileDocument className='text-primary' />Resume</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#services" className='flex items-center gap-2'><CgMenuRightAlt className='text-primary' />Services</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#skills" className='flex items-center gap-2'><LiaShapesSolid className='text-primary' />Skills</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#portfolio" className='flex items-center gap-2'><RxDragHandleDots2 className='text-primary' />Portfolio</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#reviews" className='flex items-center gap-2'><BiMessageDetail className='text-primary' />Reviews</a></li>
                            <li className='text-secondary hover:text-white duration-200'><a href="#contact" className='flex items-center gap-2'><MdOutlineMail className='text-primary' />Contact</a></li>
                        </ul>
                        <h4 className='text-secondary text-xl mt-8 ml-3'>Social</h4>
                        <ul className='flex items-center gap-5 mt-5 text-secondary'>
                            <li className='cursor-pointer hover:text-[#28e98c] duration-200'><a href="https://www.linkedin.com/in/mehedi5/"><FaLinkedinIn /></a></li>
                            <li className='cursor-pointer hover:text-[#28e98c] duration-200'><a href="https://www.facebook.com/MehediHasanNiloi/"><FaFacebookF /></a></li>
                            <li className='cursor-pointer hover:text-[#28e98c] duration-200'><a href="https://twitter.com/mehedirhasan"><RiTwitterXFill /></a></li>
                        </ul>
                    </div>
                </div>
            </SwipeableDrawer>
            {/*  */}
            <div className='lg:max-w-3xl'>
                <Intro />
                {/* <About />
                <Resume />
                <Services />
                <Skills />
                <Portfolio />
                <Reviews />
                <Contact /> */}
            </div>
        </div>
    )
}
