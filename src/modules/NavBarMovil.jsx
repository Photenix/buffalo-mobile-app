import "../styles/sass/NavBarMovil.scss"

import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import { IoPersonOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { TbClipboardList } from "react-icons/tb";
import { BiBarChartSquare } from "react-icons/bi";
class NavBarMovil extends Component {
    constructor( props ) {
        super( props );
    }

    whatActive = is =>{ return is ?'active' :'' };
    
    render() {
        const style = { color:"#4B4B4B" };
        
        return (
            <nav className='movil'>
                <ul className='movil-nav-bar'>
                    <li className={ this.whatActive( this.props.isHome ) }>
                        <Link to='/'>
                            <FiHome size={24}/>
                        </Link>
                        </li>
                    <li className={ this.whatActive( this.props.isTest ) }>
                        <Link to='/home/test'>
                            <TbClipboardList size={24}/>
                        </Link>
                    </li>
                    <li className={ this.whatActive( this.props.isProfile ) }>
                        <Link to='/'>
                            <BiBarChartSquare size={24}/>
                        </Link>
                    </li>
                    <li className={ this.whatActive( this.props.isProfile ) }>
                        <Link to='/profile'>
                            <IoPersonOutline size={24}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBarMovil;