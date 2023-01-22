import React from 'react';
import Users from '../components/Users';

export default function Home() {
  return (
    <div className="flex flex-col p-5 items-center gap-5">
      <p>this is an example of showcasing of a page with data from api</p>
      <Users />
    </div>
  );
}
