'use client'

import { Button, SectionDetails } from '@/components'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const details = 
  {
    title: 'Supply chain services for easy shipping',
    description: 'We make end-to-end supply chain.'  ,
    array: [
     'Best in class shipping services',
     'Wide and safe route of shipping',
     'Intercontinental network', 
    ]
  }

const FifthSection = () => {
  return (
    <div className='py-4 lg:grid grid-cols-2 gap-4 space-y-4 lg:space-y-0 p-8'>
        <div className='shadow-lg rounded-lg space-y-4 p-4'>
            <div>
                <h1 className='text-sm font-bold'>Input track code</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <input type="text" placeholder="SHIP-097642" className="input input-bordered w-full max-w-xs" />
                <Button icon={FaArrowAltCircleRight} text='Search' modifier='bg-blue-600 text-white'/>
            </div>
        
            <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="rounded-lg w-full" 
              allowFullScreen>
            </iframe>
        
        </div>
        <SectionDetails 
        title={details.title} 
        description={details.description} 
        array={details.array}/>
    </div>
  )
}

export default FifthSection