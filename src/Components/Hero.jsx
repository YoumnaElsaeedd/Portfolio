import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Shiny from './Shiny'
import { AiOutlineGithub, AiOutlineInstagram,AiOutlineLinkedin } from 'react-icons/ai'
import {DiCss3,DiHtml5,DiJavascript,DiReact}from"react-icons/di"
import{motion}from "framer-motion"
import Profile from "../assets/profile.jpeg"

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
    <div className='grid md:grid-cols-2 place-items-center gap-8'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "FrontEnd Developer",
            1000,
            "Web Developer",
            1000
          ]}
          speed={50}
          repeat={Infinity}
          className="font-bold text-gray-400 text-xl md:text-5xl italic mb-6"         />
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-6"  >Hey, I am <br />
        <span className='text-purple-500'>Youmna Elsaeed</span>
        </motion.p>
        <motion.p initial={{ opacity: 0 }}whileInView={{ opacity: 1 }}viewport={{ once: true }}transition={{ duration: 1, delay: 1 }}
          className="text-gray-300 md:text-2xl text-lg tracking-tight mb-4" >
          I am a passionate FrontEnd Developer
        </motion.p>
      </motion.div>
    </div>
  </div>
  
  )
}

export default Hero
