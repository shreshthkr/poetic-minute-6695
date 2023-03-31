import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Checkout } from '../Pages/Checkout';
import { DealsPage } from '../Pages/DealsPage/DealsPage';
import Home from '../Pages/Home';
import { NightDeals } from '../Pages/NightDeal/NightDeals';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignIn/SignUp';



export const AllRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/nightdeals" element={<NightDeals />} />
      <Route path="/deals" element={<DealsPage />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/login" element={<SignIn/>}/>
    </Routes>
  )
}
