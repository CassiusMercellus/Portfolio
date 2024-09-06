import { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaSass, FaGithub, FaPython, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiMongodb, SiDjango, SiNextdotjs, SiExpress, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Skills() {

  return (
    <>
      <div className="bg-black bg-cover bg-center w-full flex flex-col items-center">
      <h2 className="text-purple-600 text-5xl mb-8 font-bold">Skills</h2>
        <div className="flex justify-center text-white">
            <FaHtml5 className="w-24 h-24" />
            <FaCss3Alt className="w-24 h-24" />
            <IoLogoJavascript className="w-24 h-24" />
            <SiTypescript className="w-24 h-24" />
            <FaPython className="w-24 h-24" />
            <SiDjango className="w-24 h-24" />
            <FaReact className="w-24 h-24" />
            <SiNextdotjs className="w-24 h-24" />
            <FaSass className="w-24 h-24" />
            <FaBootstrap className="w-24 h-24" />
            <RiTailwindCssFill className="w-24 h-24" />
            <FaNodeJs className="w-24 h-24" />
            <SiExpress className="w-24 h-24" />
            <SiMysql className="w-24 h-24"/>
            <SiMongodb className="w-24 h-24" />
            <FaGitAlt className="w-24 h-24" />
            <FaGithub className="w-24 h-24" />
        </div>
      </div>
    </>
  )
}
