import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import CrowdAnalyser from './pages/crowdAnalyser';

function Test() {
    return (
        <>
            <Router>
                <Navbar />
                    <Routes>
                        <Route path='/'  element={<Home/>} />
                        <Route path='/checkcrowd' element={<CrowdAnalyser/>} />
                    </Routes>
            </Router>
        </>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'));

