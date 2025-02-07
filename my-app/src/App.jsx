import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/signin/SignIn'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<SignIn />}/>
      </Routes>

    </div>
  )
}

export default App
