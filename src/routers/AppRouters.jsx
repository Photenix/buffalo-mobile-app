import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Init from '../containers/Init';
import LogIn from '../containers/init/LogIn';
import LogUp from '../containers/init/LogUp';
import Welcome from '../containers/init/Welcome';

import NavBarMovil from '../modules/NavBarMovil';

const AppRouters = () => {

    const { isNavBar } = useContext( General )

    useEffect( () =>{
        //console.log( isNavBar );
    },[ isNavBar ])

    return (
        <BrowserRouter>
            {   
            
                isNavBar 
                    ?<NavBarMovil/>
                    :''
            }
            
            <Routes>
                <Route path="/" element={ <Init/> }/>
                <Route path="/welcome" element={ <Welcome/> }/>
                <Route path="/login" element={ <LogIn/> }/>
                <Route path="/logup" element={ <LogUp/> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;