import React from 'react'
import {Routes, Route} from "react-router-dom";
import { Checkout } from '../Pages/Checkout';
import { DealsPage } from '../Pages/DealsPage/DealsPage';
import HomePage from '../Pages/HomePage';
import { NightDeals } from '../Pages/NightDeal/NightDeals';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/nightdeals" element={<NightDeals />} />
      <Route path="/deals" element={<DealsPage />} />
   
    </Routes>
  )
}
