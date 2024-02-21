import React from 'react'
import { Button, SwipeableDrawer } from '@mui/material';
import { HiMenuAlt4 } from "react-icons/hi";
import NavMenu from '../Common/NavMenu';
import Intro from './Intro';
import About from './About';
import Resume from './Resume';
import Services from './Services';


export default function MainContent() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='text-white relative pl-10'>
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
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, hic?
            </SwipeableDrawer>
            {/*  */}
            <div className='max-w-3xl'>
                <Intro />
                <About />
                <Resume />
                <Services/>
            </div>
        </div>
    )
}
