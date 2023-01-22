import React from 'react';
import Users from '../components/Users';

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-5 items-center gap-5 bg-neutral-200">
      <Users />
    </div>
  );
}
