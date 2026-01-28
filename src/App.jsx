import React from 'react'
import { Outlet } from 'react-router-dom'
import ApiData from './components/ApiData'
// addede


function App() {
  

  return (
    <>
    <Outlet />
    <ApiData />
    </>
  )
}

export default App
