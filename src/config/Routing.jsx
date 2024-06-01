import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BigBanner from '../pages/BigBanner'
import Renegade from '../pages/Renegade'
import Renegade2 from '../pages/Renegade2'
import Renegade3 from '../pages/Renegade3'
import TimeFrame from '../pages/TimeFrame'
import FdaProcess from '../pages/FdaProcess'

const Routing = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/timeFrame' element={<TimeFrame/>}/>
                <Route path='/bigBanner' element={<BigBanner/>}/>
                <Route path='/renegade' element={<Renegade/>}/>
                <Route path='/renegade2' element={<Renegade2/>}/>
                <Route path='/renegade3' element={<Renegade3/>}/>
                <Route path='/fdaProcess' element={<FdaProcess/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing