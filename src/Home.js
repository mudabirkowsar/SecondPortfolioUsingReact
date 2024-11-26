import React from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Logo from './Logo';
import Grid from './Grid';
import About from './About';
import Qualification from './Qualification';
import Skill from './Skill';
import Projects from './Projects';
import Services from './Services';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './Master';
function Home() {
  return (
    <div>
     {/* <Navbar/> */}
     <Hero/>
     <Logo/>
     <Grid/>
     <About/>
     <Qualification/>
     <Skill/>
     <Projects/>
     <Services/>
     {/* <Footer/> */}
    </div>
  )
}

export default Home
