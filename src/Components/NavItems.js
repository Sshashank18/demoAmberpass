import React, { useEffect } from 'react'
import '../Styles/NavItems.css'

function NavItems(props) {

    useEffect(() => {
        const allNavItems = document.querySelectorAll('.nav-container');
        allNavItems.forEach((item)=>{
            if(item.innerText === 'Dashboard'){
                item.className += ' selected';
            }
        })
    }, [])
    

    const handleSelection = (e) => {
        if(e.target.className === 'nav-container') e.target.className += ' selected';
        else{
            (e.target.parentElement.className === 'nav-container')?e.target.parentElement.className += ' selected' : e.target.className += '';
        }
        const allNavItems = document.querySelectorAll('.nav-container');
        allNavItems.forEach((item)=>{
            if(item.innerText !== e.target.innerText){
                item.classList.remove('selected');
                item.className.replace('selected','')
            }
        })
    }

    return (
        <div className='nav-container'  onClick={(event) => handleSelection(event)}>
                <i className={`${props.class} navLeft-icon`} style={props.style}></i>
                <span>{props.name}</span>
                <i hidden={!props.isArrow} style={{position:'absolute',right:'10px'}} className="fa-solid fa-chevron-down"></i>
                <span hidden={!props.pill} className="badge badge-pill badge-success" style={{position:'absolute',right:'10px',fontSize:'12px',backgroundColor:'#382BDB'}}>4</span>
        </div>
    )
}

export default NavItems
