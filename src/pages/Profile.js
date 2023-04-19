import React from 'react';
import './Profile.css';
import LeftContent from '../components/Profile/LeftContent';
import RightContent from '../components/Profile/RightContent';

export function Profile() {
    return (
      <div className="Profile">
        <LeftContent/>
        <RightContent/>
      </div>
    );
  }
  
  