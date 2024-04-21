import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Regform from './Components/RegForm/Regform';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Regform/>} />
    </Routes>
  )
}

export default MainRoutes