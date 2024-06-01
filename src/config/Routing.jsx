import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BigBanner from '../pages/BigBanner'
import Renegade from '../pages/Renegade'
import Renegade2 from '../pages/Renegade2'
import Renegade3 from '../pages/Renegade3'
import Sec27 from '../pages/Sec27'
import Section2 from "../pages/Section2"
import Section3 from "../pages/Section3"
import Section4 from "../pages/Section4"
import Section5 from "../pages/Section5"
import Section6 from "../pages/Section6"
import Section7 from "../pages/Section7"
import Section8 from "../pages/Section8"
import Section9 from "../pages/Section9"
import Section10 from "../pages/Section10"
import Section11 from "../pages/Section11"
import Section12 from "../pages/Section12"
import Section13 from "../pages/Section13"
import Section14 from "../pages/Section14"
import Section15 from "../pages/Section15"
import Section16 from "../pages/Section16"
import Section17 from "../pages/Section17"
import Section18 from "../pages/Section18"
import Section19 from "../pages/Section19"
import Section20 from "../pages/Section20"
import Section24 from '../pages/Section24'
import HeroSection from '../pages/HeroSection'
import HeroSection2 from '../pages/HeroSection2'
// import Section25 from '../pages/Section25'
import '../App.css';
import TimeFrame from '../pages/TimeFrame'
import FdaProcess from '../pages/FdaProcess'
import Minor from '../pages/Minor'
import Major from '../pages/Major'
import UpScale from '../pages/UpScale'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HeroSection/>}/>
                <Route path='/hero' element={<HeroSection2/>}/>
                <Route path='/sec2' element={<Section2/>}/>
                <Route path='/sec3' element={<Section3/>}/>
                <Route path='/sec4' element={<Section4/>}/>
                <Route path='/sec5' element={<Section5/>}/>
                <Route path='/sec6' element={<Section6/>}/>
                <Route path='/sec7' element={<Section7/>}/>
                <Route path='/minor' element={<Minor/>}/>
                <Route path='/major' element={<Major/>}/>
                <Route path='/upScale' element={<UpScale/>}/>
                <Route path='/sec8' element={<Section8/>}/>
                <Route path='/sec9' element={<Section9/>}/>
                <Route path='/sec10' element={<Section10/>}/>
                <Route path='/sec11' element={<Section11/>}/>
                <Route path='/sec12' element={<Section12/>}/>
                <Route path='/sec13' element={<Section13/>}/>
                <Route path='/sec14' element={<Section14/>}/>
                <Route path='/sec15' element={<Section15/>}/>
                <Route path='/sec16' element={<Section16/>}/>
                <Route path='/sec17' element={<Section17/>}/>
                <Route path='/sec18' element={<Section18/>}/>
                <Route path='/sec19' element={<Section19/>}/>
                <Route path='/sec20' element={<Section20/>}/>
                <Route path='/sec21' element={<TimeFrame/>}/>
                <Route path='/sec22' element={<FdaProcess/>}/>
                <Route path='/sec23' element={<Sec27/>}/>
                <Route path='/sec24' element={<Section24/>}/>
                <Route path='/bigBanner' element={<BigBanner/>}/>
                <Route path='/renegade' element={<Renegade/>}/>
                <Route path='/renegade2' element={<Renegade2/>}/>
                <Route path='/renegade3' element={<Renegade3/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing