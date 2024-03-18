import { SectionDetails } from "@/components"
import { FaShip, FaClock, FaMapLocationDot  } from "react-icons/fa6";

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

  const shippingCard = [
    {
      icon: FaShip,
      title: 'Departure from San Jose',
      description: '3 Containers, 14 June',
      flex: 'justify-start',
      textColor: 'text-red-600',
      bgColor: 'bg-red-300'
    },
    {
      icon: FaClock,
      title: 'Transit from New York',
      description: '3 Containers, 17 June',
      flex: 'justify-end',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-300'
    },
    {
      icon: FaMapLocationDot,
      title: 'Departure from Accra',
      description: '3 Containers, 20 June',
      flex: 'justify-start',
      textColor: 'text-green-600',
      bgColor: 'bg-green-300'
    },
    
  ]

const FourthSection = () => {
  return (
    <div className="lg:grid gap-4 grid-cols-2 space-y-4 lg:space-y-0">
        <SectionDetails 
        title={details.title} 
        description={details.description} 
        array={details.array}/>

        <div>
          {
            shippingCard.map((card, index) => (
              <div className={`flex items-center ${card?.flex}`}>
              <div key={index} className={`flex items-center gap-4 p-4 shadow-lg rounded-xl ${card?.flex}`}>
                <div className={`text-2xl p-4 rounded-md ${card?.bgColor} ${card?.textColor}`}>
                <card.icon/>
                </div>
                <div>
                  <h1 className="text-sm font-bold">{card?.title}</h1>
                  <h1>{card?.description}</h1>
                </div>
              </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default FourthSection