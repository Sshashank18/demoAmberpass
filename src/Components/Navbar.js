import React from 'react'
import '../Styles/Navbar.css';
import logo from '../logo.svg';

function Navbar() {
  return (
    <div>
      <nav className='nav-top'>
        <div className='nav-top-left'>
          <i className="fa-solid fa-magnifying-glass" style={{marginRight:'10px'}}></i>
          <input style={{outline:'none',border:'none',width:'200px'}} placeholder='Type To Search'/>
        </div>
        <div className='nav-top-right'>
          <div className="navIcons">
            <i className="fa-solid fa-gear" style={{ color: "#85868a" }}></i>
            <i className="fa-regular fa-message"></i>
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className='nav-top-profile'>
            <div className="profile-name">
              <span style={{fontWeight:'bold',color:'black'}}>Shashank Aggarwal</span>
              <span>Developer</span>
            </div>
            <img src={logo} alt='profile' style={{width:'60px',height:'60px'}}/><i style={{paddingTop:'20px',paddingRight:'10px'}} className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
