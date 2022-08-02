import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/Logo.png'


const Init = () => {
    const toWelcome = useNavigate()
    useEffect( () => {
        setTimeout( ()=>{
            toWelcome('/welcome')
        }, 1000)
    },[])

    const style = {
        'display': 'flex',
        "justify-content": 'center',
        'aling-items': 'center'
    }

    return (
        <div style={ style }>
            <img src={ Logo } alt="" />
        </div>
    );
};

export default Init;