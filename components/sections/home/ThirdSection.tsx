import React from 'react'
import { LiaExchangeAltSolid } from "react-icons/lia";
import { FaCopy } from "react-icons/fa";
import { SectionDetails } from '@/components';
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill   } from "react-icons/bs";

const status = [
  {
    icon: Bs1CircleFill,
    iconColor: 'text-red-600',
    label: 'Departs from San Jose',
    description: 'Your package is on its way to its destination'
  },
  {
    icon: Bs2CircleFill,
    iconColor: 'text-yellow-600',
    label: 'Transit in New York', 
    description: 'Your package is on its way to its destination'
  },
  {
    icon: Bs3CircleFill,
    iconColor: 'text-green-600',
    label: 'Arrived in Accra',
    description: 'Your package has arrived in Accra and is ready for delivery'
  },
]

const details1 = 
  {
    title: 'Inland and ocean shipping solutions',
    description: 'We provide a simple and easy to use platform to track your packages because we know how important it is to keep track of your packages.'  ,
    array: [
     'Best in class shipping services',
     'Wide and safe route of shipping',
     'Intercontinental network', 
    ]
  }


const ThirdSection = () => {
  return (
    <>
    <div className='grid place-items-center gap-4 mb-4 '>
      <h1 className='capitalize'>Our services</h1>
      <div className='space-y-4 grid place-items-center'>
      <h1 className='text-5xl'>Everything is ready to transport</h1>
      <h1>We make logistic shipping much easier and straightforward. Combining good service and technology
      to provide you with the best experience.
      </h1>
      </div>
    </div>

    <div className='lg:grid grid-cols-2 gap-4 space-y-4 lg:space-y-0 mb-4'>
    <div className='p-12  space-y-4 rounded-lg shadow-lg'>
      <div className='flex gap-12 justify-between items-center'>
        <div>
          <h1>From</h1>
          <h1 className='text-2xl'>San Jose</h1>
        </div>
        <div className='text-2xl text-blue-600'>
          <LiaExchangeAltSolid/>
        </div>
        <div>
          <h1>To</h1>
          <h1 className='text-2xl'>Accra</h1>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex item-center gap-4'>
        <h1>SHIP-097642</h1>
        <FaCopy/>
        </div>
      <div>
        <h1>Leonard Tupahamu</h1>
      </div>
      </div>
      <div>
        {status.map((item, index) => (<div key={index} className='lg:grid grid-cols-2 gap-4 justify-between'>
          <div className=' lg:flex items-center gap-4 justify-start lg:space-y-0'>
            <item.icon className={`${item.iconColor} text-lg`}/>
            <h1 className='text-sm font-medium'>{item.label}</h1>
          </div>
          <div className='py-4 max-w-[300px]'>
            <h1>{item.description}</h1>
          </div>
        </div>))}     
      </div>
    </div>
    <div>
      <SectionDetails title={details1.title} description={details1.description} array={details1.array}/>
    </div>
    </div>
    </>
  )
}

export default ThirdSection