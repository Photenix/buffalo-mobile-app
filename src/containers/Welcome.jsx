import React, { useEffect, useState } from 'react';

/* import welcome_1 from '../../asset/1.png';
import welcome_2 from '../../asset/2.png';
import welcome_3 from '../../asset/3.png'; */

import '../styles/sass/Welcome.scss'


const Welcome = () => {

    const [ point, setPoint ] = useState(0)

    useEffect( () => { document.title  = "Welcome" }, [] )

    const upPoint = () =>{
        setPoint( point + 1 )
        if(  point + 1 < document.getElementById( "welcome-img" ).childNodes.length ){
            cleanClass("welcome-img")
            cleanClass("welcome-points")
            whatActive( point + 1 )
        }else{
            sessionStorage.seeWelcome = true
            window.location.reload(false)
        }
    }
    
    const toPoint = ( event ) =>{
        if(  point < document.getElementById( "welcome-img" ).childNodes.length ){
            cleanClass("welcome-img")
            cleanClass("welcome-points")
            setPoint( parseInt( event.target.value ) )
            whatActive( parseInt( event.target.value ) )
        }
        setPoint( parseInt( event.target.value ) )
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
    }

    return (
        <div className='welcome'>
                <div className="welcome-img" id='welcome-img'>
                    <img src={ 'hi' } alt="" className='active'/>
                    <img src={ 'hi' } alt="" />
                    <img src={ 'hi' } alt="" />
                </div>
                <div className="welcome-footer">
                    <div className="welcome-text">
                        <h1>Test</h1>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi maiores</h2>
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