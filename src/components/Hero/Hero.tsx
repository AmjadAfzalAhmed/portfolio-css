'use client'

import React, { useEffect, useRef } from 'react'
import './Hero.css';
import { Button } from 'react-bootstrap';
import heroPic from '/public/prof.jpg';
import Image from 'next/image';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Welcome to my Portfolio','I am Amjad Afzal Ahmed','I am a Full Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }

    const typed = new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])  

  return (
    <div className="container hero" id="hero">
      <div className="left"
      data-aos="fade-up-right"      
      data-aos-duration = "1000"
      >
        <h1 ref={typedRef}></h1>
        <a href="" className='btn'><Button variant="warning">Download Resume</Button></a>
      </div>
      <div className="right">     
      
        <div className='hero_img'
        data-aos="fade-up-left"
        data-aos-duration = "1000"
        >
        <Image
        src={heroPic}
        alt="profile-pic"
        width={350}
        height={350}
        />
         </div>
      </div>
    </div>
  )
}

export default Hero