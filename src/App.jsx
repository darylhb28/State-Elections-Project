import { useState, useEffect } from 'react'
import './App.css'
import AllStates from './AllStates'
import { Router, Routes, Route } from 'react-router-dom'
import StateDetails from './StateDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllStates />} />
        <Route path="/state/:abbreviation" element={<StateDetails />}/>
      </Routes>
    </>
  )

}


export default App
