import React from 'react';
import './RightContent.css';
import TopHalfContent from './TopHalfContent';
import BottomHalfContent from './ButtonHalfContent';

function RightContent(){
    return(
        <div className="RightContentProfile">
            <TopHalfContent/>
            <BottomHalfContent/>
        </div>
    );
}

export default RightContent;