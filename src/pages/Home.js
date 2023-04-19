import React from 'react';
import './Home.css';
import LeftContent from '../components/Home/LeftContent';
import RightContent from '../components/Home/RightContent';

export function Home() {
    return (
      <div className="Home">
        <LeftContent/>
        <RightContent/>
      </div>
    );
  }
  
  