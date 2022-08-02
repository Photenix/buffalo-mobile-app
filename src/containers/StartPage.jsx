
import React from 'react'
import '../styles/sass/startPage.scss'
import imgElement from '../assets/logo-pesa.svg'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <div className='center-element'>
        <Link to="/next-card"><img className='img-pesa' src={imgElement} /></Link>
        <h1>Buffalo</h1>
    </div>
  )
}

export default StartPage