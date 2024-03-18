'use client'

import { FaArrowAltCircleRight } from "react-icons/fa"
import { Button } from "."

interface SectionDetailsProps {
  title: string,
  description: string,
  array: string[]
}

const SectionDetails:React.FC<SectionDetailsProps> = ({array, description, title}) => {
  return (
    <div className='space-y-4'>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <div className="space-y-4">
        {array.map((item, index) => (
           <div className="flex items-center gap-4" key={index}>
            <FaArrowAltCircleRight/>
              <h1>{item}</h1>
           </div>
         ))}
      </div>
      <Button modifier="bg-blue-600 text-white" text="Learn more" icon={FaArrowAltCircleRight}/>
    </div>
  )
}

export default SectionDetails