import Image from "next/image"

const Landing = () => {
  return (
    <div className="grid place-items-center lg:gap-8 p-8 
                    bg-[url('https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                    relative bg-no-repeat bg-cover  h-[50vh] text-white m-8 rounded-md">
        <div className="text-center space-y-4 max-w-[1200px] z-[999]">
        <h1 className="text-2xl lg:text-7xl font-bold capitalize"><span className="text-blue-600">grow your business</span> and we will take care of your logistics</h1>
        <p className="text-md text-xl font-thin">
        {`It's time to adapt your business to keep up with how the world of commerce is evolving. Onlineize your offline logistics service. Booking, controlling, and monitoring your shipments are all simple with Cicero.`}
        </p>
        </div>
      <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0"></div>
        {/* <Image 
        className="rounded-2xl" 
        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="devices" 
        width={1470} 
        height={635} 
        /> */}
    </div>
  )
}

export default Landing