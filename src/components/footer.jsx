import { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {

  return (
    <>
        <div className="flex flex-col">
            <div className="bg-black bg-cover bg-center w-full flex justify-center gap-5">
                <FaGithub className="text-purple-600 text-4xl hover:scale-110"/>
                <FaLinkedin className="text-purple-600 text-4xl hover:scale-110" />
            </div>
            <p className="flex justify-center font-bold py-5 bg-black text-white">Marceluswork@gmail.com</p>
        </div>
      
    </>
  )
}

