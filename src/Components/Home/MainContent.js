import React from 'react'
import { Button, SwipeableDrawer } from '@mui/material';
import { HiMenuAlt4 } from "react-icons/hi";
import NavMenu from '../Common/NavMenu';


export default function MainContent() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='text-white relative'>
            {/*  */}
            <button onClick={() => setOpen(true)} className='border border-gray rounded-full p-2 text-xl absolute right-5 top-5 z-10'>
                <HiMenuAlt4 />
            </button>
            <div className='absolute right-5 h-screen w-fit flex flex-col justify-center'>
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

        </div>
    )
}
