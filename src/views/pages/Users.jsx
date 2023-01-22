import React from 'react';
import Users from '../components/Users';

export default function Home() {
  return (
    <div className="flex flex-col p-5 items-center gap-5">
      <div className="flex flex-col gap-1">
        <p>this is an example of showcasing a react page with backend api call</p>

        {/* api */}
        <span className="flex gap-2 items-center">
          edit
          <code className="bg-slate-500 text-slate-200 rounded px-1">
            /src/api/v1/users/user.controllers.js
          </code>
          <code className="bg-slate-500 text-slate-200 rounded px-1">getUsers()</code>
          for api
        </span>

        {/* react */}
        <span className="flex gap-2 items-center">
          edit
          <code className="bg-slate-500 text-slate-200 rounded px-1">
            /src/views/pages/Users.jsx
          </code>
          for react file
        </span>
      </div>
      <Users />
    </div>
  );
}
