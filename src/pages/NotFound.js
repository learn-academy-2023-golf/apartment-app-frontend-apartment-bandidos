import React from 'react'
import "../App.css";
import errorImage from '../assets/notfound.JPG'

const NotFound = () => {
  return (
    <div className= "errorPage">
      <img className='catError' src={errorImage} />
    </div>
  )
}

export default NotFound