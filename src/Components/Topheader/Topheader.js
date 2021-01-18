import React from 'react';
import './Topheader.css';

import Logo from '../../Assets/Deliveroo-logo.png';

const Topheader = () => {
    return (
        <div className='Topheader'>
            <img src={Logo} alt="Logo"/> 
        </div>

    )
}

export default Topheader;