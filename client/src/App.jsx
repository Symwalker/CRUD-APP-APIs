import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import ResponsiveAppBar from './muiComponents/Navbar/Navbar';
import Add from './pages/Add';
import Edit from './pages/Edit';

const App = () => {
    return (
        <>
        <ResponsiveAppBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/add' element={<Add/>} />
                <Route path='/about/:id' element={<Edit/>} />
                {/* and more pages you ant to make */}
            </Routes>
        </>
    )
}

export default App
