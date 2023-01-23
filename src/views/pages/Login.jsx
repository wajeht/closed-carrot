import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <p>this is a login page</p>

      <div className="bg-slate-200 rounded-md p-3 flex flex-col gap-3 shadow-md max-w-md w-full">
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="p-2 rounded-md" type="email" name="email" id="email" />
        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input className="p-2 rounded-md" type="password" name="password" id="password" />
        </div>

        {/* remember me and forgot password */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>

        {/* login */}
        <button className="bg-slate-400 p-2 rounded-md mt-3">Login</button>
      </div>
    </div>
  );
}
