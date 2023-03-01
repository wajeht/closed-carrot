import React from 'react';

import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Marketing from '../components/Marketing';

export default function Home() {
  return (
    <>
      <Hero />
      <CoreValues />
      <Marketing />
      {/* <div className="bg-green-50 min-h-[500px]"></div>
      <div className="bg-orange-50 min-h-[500px]"></div> */}
    </>
  );
}
