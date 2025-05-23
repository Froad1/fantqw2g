import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Room from './components/pc/pages/Room/Room'
import Main from './components/pc/pages/Main/Main'
import Header from './components/pc/UI/Header/Header'
import Login from './components/pc/pages/Login/Login'
import Register from './components/pc/pages/Register/Register'
import Home from './components/pc/pages/Home/Home'
import ProtectedRoute from './assets/ProtectedRoute'
import PrivateRoom from './components/pc/pages/Room/PrivateRoom'

import { motion as m } from 'framer-motion'
import animationConfig from '/public/configs/animationConfig';
function App() {
  const [isLight, setIsLight] = useState(false)

  return (
    <m.div layout transition={animationConfig.move} key='App' className='App' data-theme={isLight ? "light" : "dark"}>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/fantqw2g/'}>
        <Header/>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/room/:roomId' element={<PrivateRoom><Room/></PrivateRoom>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/> */}
        </Routes>
      </BrowserRouter>
    </m.div>
  )
}

export default App
