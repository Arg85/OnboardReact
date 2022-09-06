import React from 'react'
import Logo from "../Img/Logo.png"
function Header() {
  return (
    <div className="Header">
        <img className='logo' src={Logo} alt=""/>
    <h2>Eden</h2>
    </div>
  )
}

export default Header