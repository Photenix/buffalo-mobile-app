import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/Logo.png'


const Init = () => {
    const toWelcome = useNavigate()
    
    /* useEffect( () => {
        setTimeout( ()=>{
            toWelcome('/welcome')
        }, 3000)
    },[]) */

    const style = {
        'display': 'flex',
        'flex-direction': 'column',
        "justify-content": 'center',
        'align-items': 'center',
        "height": "100vH",
        'font-family': 'Racing Sans One',
    }

    return (
        <div style={ style }>
            <img src={ Logo } alt="" />
            <h1>Buffalo</h1>
        </div>
    );
};

export default Init;