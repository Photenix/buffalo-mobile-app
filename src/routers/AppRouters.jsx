import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '../containers/StartPage';
import Welcome from '../containers/Welcome';


const AppRouters = () => {

  
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/next-card" element={<Welcome />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;