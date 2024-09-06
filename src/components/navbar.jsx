import { useState } from 'react'
import { IoMdDownload } from "react-icons/io";

export default function Nav() {
    
    const [activeButton, setActiveButton] = useState('Home');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };

  return (
    <>
      <div className="fixed top-0 left-0 flex justify-end w-full px-96 pt-5 bg-black h-24">
        <div className="flex text-white font-bold text-xl items-center">
            {['Home', 'About', 'Skills', 'Projects'].map((buttonName) => (
            <button
                key={buttonName}
                className={`p-5 hover:text-indigo-500 hover:underline hover:underline-offset-8 ${
                activeButton === buttonName
                    ? 'text-purple-600 underline underline-offset-8'
                    : ''
                }`}
                onClick={() => handleButtonClick(buttonName)}
            >
                {buttonName}
            </button>

            ))}
            <button className="flex items-center justify-between gap-2 bg-purple-600 text-2xl py-1 px-4 rounded-full text-white transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(128,90,213,0.7)]">
                <p>Download CV</p>
                <IoMdDownload />
            </button>
        
        </div>
      </div>
    </>
  )
}
