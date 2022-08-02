import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '../containers/StartPage';


const AppRouters = () => {

  
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<StartPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;