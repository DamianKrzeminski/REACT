import React from 'react';
import './LeftContent.css';

function LeftContent(){
    return(
        <div className="LeftContentProfile">
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Firstname:</span>
                <span className='personalDataText'>Damian</span>
            </section>
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Lastanme:</span>
                <span className='personalDataText'>Krzemiński</span>
            </section>
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Group:</span>
                <span className='personalDataText'>INMN4_PA1.1</span>
            </section>
            <section className='personalDataBox'>
                <span className='personalDataTextLabel'>Index Number:</span>
                <span className='personalDataText'>43737</span>
            </section>
        </div>
    );
}

export default LeftContent;