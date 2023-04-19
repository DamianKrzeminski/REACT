import React from 'react';
import './RightContent.css';
import QuarterContent from './QuarterContent';

function RightContent(){
    return(
        <div className="RightContentHome">
            <QuarterContent/>
            <QuarterContent/>
            <QuarterContent/>
            <QuarterContent/>
        </div>
    );
}

export default RightContent;