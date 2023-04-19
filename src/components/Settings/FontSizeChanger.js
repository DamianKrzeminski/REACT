import React, {useState} from 'react';
import './FontSizeChanger.css'

function FontSizeChanger(){
    const [fontSize, setFontSize] = useState(18);
    const body = document.documentElement;
    body.style.setProperty('--font-size', fontSize + 'px')

    function increaseFontSize(){
        setFontSize(fontSize + 1);
    }

    function decreaseFontSize(){
        setFontSize(fontSize - 1);
    }

    return(
        <div className="changeFontSizeElement">
            <span className="changeFontSizeBoxForText">
                <span className="changeFontSizeText">Font Size</span>
                <span className="changeFontSizeText">Current font size: { fontSize }</span>
            </span>
            <div className='changeFontSizeButtonsBox'>
                <span className="changeFontSizeButton" onClick={increaseFontSize}><span className='changeFontSizeButtonText'>+</span></span>
                <span className="changeFontSizeButton" onClick={decreaseFontSize}><span className='changeFontSizeButtonText'>-</span></span>
            </div>
        </div>
    )
}

export default FontSizeChanger;