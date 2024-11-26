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
import Home from './Home';
import Contactme from './Contactme';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<Master/>} >
          <Route path = '/' element = {<Home/>}></Route>
          <Route path = '/home' element = {<Home/>}></Route>
          <Route path = '/about' element = {<About/>}></Route>
          <Route path = '/services' element = {<Services/>}></Route>
          <Route path = '/contactme' element = {<Contactme/>}></Route>

        </Route>
      </Routes>
      </BrowserRouter>
     {/* <Navbar/>
     <Hero/>
     <Logo/>
     <Grid/>
     <About/>
     <Qualification/>
     <Skill/>
     <Projects/>
     <Services/>
     <Footer/> */}
    </div>
  );
}

export default App;
