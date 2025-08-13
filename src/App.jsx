import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import ShopingPage from './Component/ShopingPage'
import PDP from "./Component/PDP";


export default function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<ShopingPage />} />
        <Route path="/PDP" element={<PDP />} />
      </Routes>
    </Router>

   
  )
}
