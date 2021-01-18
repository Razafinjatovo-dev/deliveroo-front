import React from 'react';
import './Header.css';



const Header = (props) => {
    const{restoName, description,picture} = props;


    return(
        <div className ="Header">
            <div>
                <h1>{restoName}</h1>
                <p>{description}</p>
            </div>
            <div className='restoLogo'>
                <img src= {picture} alt='resto-logo'/>
            </div>
        </div>
    )
}

export default Header;