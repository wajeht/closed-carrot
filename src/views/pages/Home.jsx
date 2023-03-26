import React from 'react';

import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Marketing from '../components/Marketing';
// import Clients from '../components/Clients';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <CoreValues />
      <Marketing />
      <Services />
      {/* <Clients /> */}
    </div>
  );
}
