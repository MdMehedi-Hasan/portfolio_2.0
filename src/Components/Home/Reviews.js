import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import samir from '../../Assets/companies/al_samir.jpeg'

export default function Reviews() {
  return (
    <div className='mt-10'>
      <span className='flex items-center gap-2 text-xs border border-[#565656] rounded-full w-fit px-4 py-2'><BiMessageDetail />REVIEWS</span>
      <h1 className='text-5xl mt-16 mb-10'>Trusted by <span className='text-primary'>Leading Companies</span></h1>
      <div className='border-2 border-gray-400 rounded-3xl p-10'>
        <div className='flex items-center gap-3'>
          <img src={samir} alt="Al Samir" className='w-12 rounded-full' />
          <div>
            <h5>Al Samir</h5>
            <span>CEO of <span className='text-primary'>Interactive Cares</span></span>
          </div>
        </div>
        <p className='mt-8 text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, facilis dolorum! Id fugiat blanditiis esse fugit consequatur aspernatur reprehenderit voluptatibus deleniti veritatis eum. Ducimus, quas numquam.</p>
        <span className='text-sm'>JOB (Full Time)</span>
      </div>
    </div>
  )
}
