import { Card } from "@/components";
import { FaGlobeAfrica } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { SiFsecure } from "react-icons/si";

const CardDetails = [
    {
    logo: FaGlobeAfrica,
    iconColor: 'text-red-600',
    iconBackgroundColor: 'bg-red-200',
    title: 'Your international shipping partner',
    description: 'With enhanced tracking and shipping solutions that will accelerate your business while delivering the best customer experience.'
    },
    {
    logo: GoFileDirectoryFill,
    iconColor: 'text-yellow-600',
    iconBackgroundColor: 'bg-yellow-200',
    title: 'One place to save all your shipping needs',
    description: 'We provide a simple and easy to use platform to track your packages because we know how important it is to keep track of your packages.'
    },
    {
    logo: SiFsecure,
    iconColor: 'text-green-600',
    iconBackgroundColor: 'bg-green-200',
    title: 'Secure, transparent and reliable shipping solutions',
    description: 'Check and track your packages with our secure, transparent and reliable shipping solutions. We provide a simple and easy to use platform to track your packages.'
    },
 
]

const SecondSection = () => {
  return (
    <>
    <div className='lg:flex space-y-4 items-center gap-4 w-full justify-center p-8'>
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
        {CardDetails.map((card, index) => <Card key={index} 
                                                logo={card.logo} 
                                                iconColor={card.iconColor} 
                                                title={card.title} 
                                                description={card.description}
                                                iconBackgroundColor={card.iconBackgroundColor}
                                                />)}
    </div>
    </>
  )
}

export default SecondSection