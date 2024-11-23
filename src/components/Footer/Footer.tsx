import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='foot'>
    <h1>
        Designed with <FontAwesomeIcon icon={faHeart} className="text-red-600 w-6 h-6" /> by Amjad Afzal Ahmed
    </h1>
    </div>
  )
}

export default Footer