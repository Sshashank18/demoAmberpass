import React from 'react'
import '../Styles/NavbarLeft.css'
import NavItems from './NavItems'
import logo from '../logo.svg'

function NavbarLeft() {
  return (
    <div style={{width:'270px'}}>
      <nav className='side-nav'>
        <div className="intro">
          <img src={logo} alt="artemis" width={'80px'}/>
          <h3 style={{paddingTop:'10px'}}>Artemis</h3>
        </div>
        <hr></hr>
        <span>MAIN</span>
        <NavItems name='Dashboard'  isArrow={true} class="fa-solid fa-gauge" style={{color: "#858585"}}/>
        <NavItems name='Discover'  isArrow={false} class="fa-solid fa-globe" pill={true}/>
        <NavItems name='Users'  isArrow={true} class="fa-regular fa-user"/>
        <NavItems name='Documents'  isArrow={true} class="fa-solid fa-book-open"/>
        <NavItems name='Applications'  isArrow={true} class="fa-solid fa-table-cells-large"/>
        <NavItems name='Pages' isArrow={true} class="fa-regular fa-file"/>
        <br></br>
        <span>SECONDARY</span>
        <NavItems name='Support Center' isArrow={false} class="fa-solid fa-circle-question"/>
        <NavItems name='Inbox'  isArrow={false} class="fa-solid fa-inbox"/>
        <NavItems name='File Manager'  isArrow={false} class="fa-regular fa-folder-open"/>
        <NavItems name='Data List'  isArrow={false} class="fa-solid fa-list"/>
        <br/>
        <br/>
        <NavItems name='Settings'  isArrow={false} class="fa-solid fa-gear"/>
        <NavItems name='Log Out' isArrow={false} class="fa-solid fa-right-from-bracket"/>
      </nav>
    </div>
  )
}

export default NavbarLeft
