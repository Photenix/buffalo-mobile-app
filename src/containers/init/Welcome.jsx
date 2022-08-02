import React, { useEffect, useState } from 'react';

import man1 from '../../assets/man_1.png'
import man2 from '../../assets/man_2.png'
import man3 from '../../assets/man_3.png'

import '../../styles/sass/Welcome.scss'


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
                        <h1>Workout</h1>
                        <h2>Start training with usand build
                            muscle or lose weight</h2>
                    </div>
                    <div>
                        <h1>Discipline</h1>
                        <h2>Develop discipline in yourself 
                            train every day</h2>
                    </div>
                    <div>
                        <h1>Character</h1>
                        <h2>Cultivate in you an iron character 
                            for training</h2>
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