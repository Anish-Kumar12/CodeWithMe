import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { EditorPage } from './components/EditorPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/editor/:roomId' element={<EditorPage/>} />
    </Routes>
    </>
  )
}

export default App
