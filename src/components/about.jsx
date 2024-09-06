import { useState } from 'react'
import img from '../assets/Setup0.png'

export default function About() {

  return (
    <>
      <div className="flex flex-col items-center justify-center py-64 bg-black bg-cover bg-center w-full">
        <h2 className="text-white text-5xl mb-8 font-bold"><span className="text-purple-600 text-5xl">About</span> Me</h2>
        <div className="flex w-1/2 gap-10">
        <p className="w-1/2">
            <img src={img} alt="Description of the image" className="h-auto rounded-2xl" />
        </p>
        <p className="text-white text-2xl w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dicta facilis doloremque pariatur neque numquam, alias odio iure culpa hic odit ipsa repellendus aliquid dignissimos! Labore incidunt esse architecto accusamus omnis. Dolore repellat amet consequatur. Dolore repellat amet consequatur.</p>
        </div>
        
      </div>
    </>
  )
}