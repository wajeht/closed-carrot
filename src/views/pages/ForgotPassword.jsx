import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full">
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="p-2 rounded-md" type="email" name="email" id="email" />
        </div>

        {/* login */}
        <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md mt-3">Submit</button>

        {/* register */}
        <div className="mt-3 flex gap-2 justify-center ">
          <p>Already have an account yet?</p>
          <Link className="underline" to="/login">
            Login!
          </Link>
        </div>
      </div>
    </div>
  );
}
