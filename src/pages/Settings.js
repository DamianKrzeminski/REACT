import React from 'react';
import './Settings.css';
import LeftContent from '../components/Settings/LeftContent';
import RightContent from '../components/Settings/RightContent';

export function Settings() {
    return (
      <div className="Settings">
        <LeftContent/>
        <RightContent/>
      </div>
    );
  }
  
  