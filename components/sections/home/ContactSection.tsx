'use client'

import { Button } from '@/components';
import { FaQuoteLeft } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const ContactSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-3 pt-20">
            <h2 className="text-2xl text-center font-bold">
                Looking for leading shipping company for your business?
            </h2>
            <div className='flex items-center gap-4'>
            <Button text="FAQ" icon={FaQuoteLeft} modifier='bg-white' />
            <Button text="Book a Call" icon={FaPhoneVolume} />
            </div>
        </div>
    );
};

export default ContactSection;
