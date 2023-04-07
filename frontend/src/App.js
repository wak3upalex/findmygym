import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import LandingPage from './components/pages/LandingPage'
/*import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'*/

import './App.css'
import LandingPage from './components/pages/LandingPage'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <LandingPage /> } />
            </Routes>    
        </Router>
    )
}