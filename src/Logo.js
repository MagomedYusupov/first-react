import React from 'react';
import image from './assets/logo.svg';

function Logo(props) {
    return (
        <div className="logo">
            <img src={image}/>
        </div>
    );
}

export default Logo;