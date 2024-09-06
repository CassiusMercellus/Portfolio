import { useState } from 'react'
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import img from '../assets/me.png'

export default function Hello() {

  return (
    <>
        <div className="flex w-full pt-64">
            <div className="flex flex-col items-center justify-center w-1/2">
                <img src={img} alt="Description of the image" className="w-1/2 h-auto rounded-2xl" />
            </div>
            <div className="flex flex-col justify-center w-1/2 font-bold">
                <h2 className="text-white text-6xl mb-5">Hello, I'm <span className="text-purple-600 text-6xl">Cassius</span></h2>
                <h2 className="text-white text-5xl mb-8">I'm a <span className="text-purple-600 text-5xl">Frontend</span> Developer</h2>
                <p className="text-white w-3/4 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iste minima voluptate id ipsam hic omnis nesciunt maxime doloremque fugit ipsum minus nulla non adipisci perferendis molestiae nemo libero quos, quidem voluptatum repellendus! Mollitia quia quaerat blanditiis praesentium minus delectus.</p>
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
