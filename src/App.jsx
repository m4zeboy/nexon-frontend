import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from './components/Header'

import './styles/style.scss'

function App() {
  return (
    <div>
      <Header />
     
      <Outlet />
    </div>
  )
}

export default App
