import React, { useEffect, useState } from 'react';

/* import welcome_1 from '../../asset/1.png';
import welcome_2 from '../../asset/2.png';
import welcome_3 from '../../asset/3.png'; */

import logo from '../assets/Logo.png'
import man1 from '../assets/man_1.png'
import man2 from '../assets/man_2.png'
import man3 from '../assets/man_3.png'

import '../styles/sass/Welcome.scss'


const Welcome = () => {

    const [ point, setPoint ] = useState(0)

    useEffect( () => { document.title  = "Welcome" }, [] )

    const upPoint = () =>{
        setPoint( point + 1 )
        if(  point + 1 < document.getElementById( "welcome-img" ).childNodes.length ){
            clearClassAll()
            whatActive( point + 1 )
        }else{
            sessionStorage.seeWelcome = true
            window.location.reload(false)
        }
    }
    
    const toPoint = ( event ) =>{
        if(  point < document.getElementById( "welcome-img" ).childNodes.length ){
            clearClassAll()
            setPoint( parseInt( event.target.value ) )
            whatActive( parseInt( event.target.value ) )
        }
        setPoint( parseInt( event.target.value ) )
    }

    const clearClassAll = () => {
        cleanClass("welcome-img")
        cleanClass("welcome-points")
        cleanClass("welcome-text")
    }

    const cleanClass = ( id ) =>{
        document.getElementById( id ).childNodes
            .forEach( element =>{ element.className = "" } )
    }

    const whatActive = ( id ) =>{
        document.getElementById( "welcome-points" )
            .childNodes[ id ].className = "active"
        document.getElementById( "welcome-img" )
            .childNodes[ id ].className = "active"
        document.getElementById( "welcome-text" )
            .childNodes[ id ].className = 'active'
    }

    return (
        <div className='welcome'>
                <div className="welcome-img" id='welcome-img'>
                    <img src={ man1 } alt="" className='active'/>
                    <img src={ man2 } alt="" />
                    <img src={ man3 } alt="" />
                </div>
                <div className="welcome-footer">
                    <div className="welcome-text" id='welcome-text'>
                        <div className="active">
                            <h1>Test 1</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi maiores</h2>
                        </div>
                        <div>
                            <h1>Test 2</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi maiores</h2>
                        </div>
                        <div>
                            <h1>Test 3</h1>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi maiores</h2>
                        </div>
                    </div>
                    <div className="welcome-points" id='welcome-points'>
                        <button className='active' value={0} onClick={ toPoint }></button>
                        <button value={1} onClick={ toPoint }></button>
                        <button value={2} onClick={ toPoint }></button>
                    </div>
                    <button className='next' type="button" 
                    onClick={ upPoint } >Next</button>
                </div>
            </div>
    );
};

export default Welcome;