'use client'

import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from '@/components/Contact/Contact';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    Aos.init();
  
  }, [])
  
  return (
    <>
    <div className="container">
    <Hero />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    </div>
    </>   
  );
}