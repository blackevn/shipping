import Image from "next/image"

const Landing = () => {
  return (
    <div className=" grid place-items-center lg:gap-8 min-h-screen">
        <div className="text-center space-y-4">
        <h1 className="text-2xl lg:text-7xl font-bold capitalize"><span className="text-blue-600">grow your business</span> and we will take care of your logistics</h1>
        <p className="text-md text-xl font-bold">This is a simple app to track packages</p>
        </div>
        <Image 
        className="rounded-2xl" 
        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="devices" 
        width={500} 
        height={500}/>
    </div>
  )
}

export default Landing