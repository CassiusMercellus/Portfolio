import { useState } from 'react'
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Hello() {

  return (
    <>
        <div className="flex w-full pt-64">
            <div className="flex flex-col justify-center w-1/2">
            
            </div>
            <div className="flex flex-col justify-center w-1/2 font-bold">
                <h2 className="text-white text-6xl mb-5">Hello, I'm <span className="text-purple-600 text-6xl">Cassius</span></h2>
                <h2 className="text-white text-5xl mb-8">I'm a <span className="text-purple-600 text-5xl">Frontend</span> Developer</h2>
                <div className="flex gap-5 mb-8">
                    <FaGithub className="text-purple-600 text-4xl hover:scale-110"/>
                    <FaLinkedin className="text-purple-600 text-4xl hover:scale-110" />
                </div>
                <button className="flex items-center justify-between gap-4 self-start bg-purple-600 text-2xl rounded-full px-6 py-2 text-white transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(128,90,213,0.7)]">
                    <p>Contact</p>
                    <FaArrowRight />
                </button>
            </div>
        </div>
        
    </>
  )
}
