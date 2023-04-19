import React from 'react';
import './LeftContent.css';
import DarkModeSwitch from './DarkModeSwitch';

function LeftContent(){
    return(
        <div className="LeftContentSettings">
            <DarkModeSwitch/>
        </div>
    );
}

export default LeftContent;
