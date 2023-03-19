import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-3 items-center fade-in">
      <div className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full">
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="p-2 rounded-md" type="email" name="email" id="email" />
        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <div className="w-full flex">
            {/* input */}
            <input
              className="p-2 rounded-md w-full pr-[40px]"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
            />
            {/* eye drop */}
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="ml-[-30px]  text-slate-400 hover:text-slate-500 cursor-pointer"
            >
              {showPassword ? <BsEyeSlash /> : <BsEye />}
            </button>
          </div>
        </div>

        {/* remember me and forgot password */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link className="underline" to="/forgot-password">
            Forgot Password
          </Link>
        </div>

        {/* login */}
        <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md mt-3">Login</button>

        {/* register */}
        <div className="mt-3 flex gap-2 justify-center ">
          <p>Don't have an account yet?</p>
          <Link className="underline" to="/register">
            Register!
          </Link>
        </div>
      </div>
    </div>
  );
}
