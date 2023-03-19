import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-3 items-center fade-in">
      <div className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full">
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

        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmed-password">Confirmed password</label>
          <div className="w-full flex">
            {/* input */}
            <input
              className="p-2 rounded-md w-full pr-[40px]"
              type={showPassword ? 'text' : 'password'}
              name="confirmed-password"
              id="confirmed-password"
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

        {/* Submit */}
        <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md mt-3">Submit</button>
      </div>
    </div>
  );
}
