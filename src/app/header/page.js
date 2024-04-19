'use client';
import React from 'react';
import Navbar from './components/navbar';
import Back from './components/back';
import Text from '../text/Text';


export default function Header() {
  return (
    <header>
      <div>
        <div>
          <Navbar />
          <Text />

        </div>
        <div>
          <Back />
        </div>
      </div>
    </header>
  );
}
