import React, {useState} from 'react';
import './DarkModeSwitch.css';

function DarkModeSwitch(){
    const [darkMode, setDarkMode] = useState('#1d1d1d');
    const app = document.documentElement;
    app.style.setProperty('--background-color', darkMode);

    function changeMode(){
        
        console.log(app);
        if (darkMode === '#1d1d1d'){
            setDarkMode('rgb(207, 205, 205)');
        }else{
            setDarkMode('#1d1d1d');
        }
    }

    return(
        <div className="darkModeElement">
            <span className="darkModeBoxForText"><span className="darkModeText">Dark Mode</span></span>
            <span className="darkModeButton" onClick={changeMode}><span className='darkModeButtonText'>Change Mode</span></span>
        </div>
    );
}

export default DarkModeSwitch;
