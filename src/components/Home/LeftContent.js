import React from 'react';
import './LeftContent.css';
import HalfContent from './HalfContent';

function LeftContent(){
    return(
        <div className="LeftContentHome">
            <HalfContent/>
            <HalfContent/>
        </div>
    );
}

export default LeftContent;