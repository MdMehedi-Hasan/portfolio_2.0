import React from 'react'
import SideProfile from '../Components/Home/SideProfile'
import MainContent from '../Components/Home/MainContent'

export default function Home() {
    return (
        <div className='text-white grid grid-cols-12 gap-5 relative'>
            <aside className='col-span-4 h-screen sticky top-0'>
                <SideProfile />
            </aside>
            <main className='col-span-8'>
                <MainContent />
            </main>
        </div>
    )
}
