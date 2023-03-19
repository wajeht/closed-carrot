import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-3 items-center fade-in">
      <div className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full">
        {/* username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input className="p-2 rounded-md" type="text" name="username" id="username" />
        </div>

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
        <div className="flex flex-col  gap-2">
          <div className="flex gap-2">
            <input type="checkbox" name="i-agree" id="i-agree" />
            <label htmlFor="i-agree">I agree</label>
          </div>
          <small>
            Signing up signifies that you have read and agree to the{' '}
            <Link className="underline" to="/terms-of-service">
              {' '}
              Terms Of Service{' '}
            </Link>{' '}
            and our{' '}
            <Link className="underline" to="/privacy-policy">
              {' '}
              Privacy Policy.
            </Link>
          </small>
        </div>

        {/* register */}
        <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md mt-3">Register</button>

        {/* login */}
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
