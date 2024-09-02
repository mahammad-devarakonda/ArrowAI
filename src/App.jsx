import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Img from './pages/Img'
import About from './pages/About'
import Ai from './pages/Ai'
import logo from './assets/logo.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import useGetQuestionsFirebase from './Hooks/useGetQuestionsFirebase'
const App = () => {

  useGetQuestionsFirebase();
  
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 flex justify-between items-center p-2 bg-white text-black border-b border-neutral-300 z-10'>
        <div className='text-lg font-bold space-x-2 flex items-center h-10 transition-transform duration-300 hover:scale-105'>
          <Link to="/"><img className="h-10" src={logo} alt='logo' /></Link>
          <span className="text-lg font-bold">ArrowAi</span>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <SignedOut>
            <Link className="hover:text-gray-400" to="/about">About</Link>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Link className="hover:text-gray-400" to="/ai">Try SiNi</Link>
            <Link className="hover:text-gray-400" to="/img">Generate Image</Link>
            <Link className="hover:text-gray-400" to="/about">About</Link>
            <UserButton />
          </SignedIn>
        </div>
      </nav>


  

      <div className="mt-16 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/img" element={<Img />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
