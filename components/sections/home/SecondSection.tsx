import { Card } from "@/components";
import { FaGlobeAfrica } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { SiFsecure } from "react-icons/si";

const CardDetails = [
    {
    logo: FaGlobeAfrica,
    title: 'Your international shipping partner',
    description: 'With enhanced tracking and shipping solutions that will accelerate your business while delivering the best customer experience.'
    },
    {
    logo: GoFileDirectoryFill,
    title: 'One place to save all your shipping needs',
    description: 'We provide a simple and easy to use platform to track your packages because we know how important it is to keep track of your packages.'
    },
    {
    logo: SiFsecure,
    title: 'Secure, transparent and reliable shipping solutions',
    description: 'Check and track your packages with our secure, transparent and reliable shipping solutions. We provide a simple and easy to use platform to track your packages.'
    },
 
]

const SecondSection = () => {
  return (
    <>
    <div className='lg:flex space-y-4 items-center gap-4 w-full justify-between'>
        <div  className=''>
            <h1>About</h1>
            <h1 className='text-5xl max-w-[600px]'>Solutions for your business needs</h1>
        </div>
        <div className='max-w-[500px] text-xl'>
            We make logistic shipping easy for you. 
            We provide a simple and easy to use platform to track your packages.
        </div>
    </div>
    <div className="lg:flex gap-4 p-8 space-y-4 lg:space-y-0">
        {CardDetails.map((card, index) => <Card logo={card.logo} title={card.title} description={card.description}/>)}
    </div>
    </>
  )
}

export default SecondSection