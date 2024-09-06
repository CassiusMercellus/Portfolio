import { useState } from 'react'

export default function Nav() {
    
    const [activeButton, setActiveButton] = useState('Home');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
      };

  return (
    <>
      <div className="fixed top-0 left-0 flex justify-end w-full px-96 pt-5">
        <div className="flex text-white font-bold text-xl">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((buttonName) => (
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
        </div>
      </div>
    </>
  )
}
