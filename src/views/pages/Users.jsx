import React from 'react';
import Users from '../components/Users';

export default function Home() {
  return (
    <div className="flex flex-col p-5 items-center gap-5">
      <Users />
    </div>
  );
}
