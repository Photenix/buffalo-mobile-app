import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
                <Route path="/" element={ <div>Hello</div> }/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;