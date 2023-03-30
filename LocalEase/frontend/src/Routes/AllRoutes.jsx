import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Checkout } from '../Pages/Checkout';
import { DealsPage } from '../Pages/DealsPage/DealsPage';
import HomePage from '../Pages/HomePage';
import { NightDeals } from '../Pages/NightDeal/NightDeals';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignIn/SignUp';


export const AllRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/nightdeals" element={<NightDeals />} />
      <Route path="/deals" element={<DealsPage />} />
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
    </Routes>
  )
}
