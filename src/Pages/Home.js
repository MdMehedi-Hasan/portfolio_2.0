import React from 'react'
import SideProfile from '../Components/Home/SideProfile'
import MainContent from '../Components/Home/MainContent'

export default function Home() {
    return (
        <div className='text-white grid grid-cols-12 gap-5 relative px-5'>
            <aside className='col-span-12 lg:col-span-3 h-fit lg:h-screen lg:sticky lg:top-0'>
                <SideProfile />
            </aside>
            <main className='col-span-12 lg:col-span-9 overflow-hidden'>
                <MainContent />
            </main>
        </div>
    )
}
