import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full">
        {/* subject */}
        <div className="flex flex-col gap-1">
          <label htmlFor="subject">Subject</label>
          <input className="p-2 rounded-md" type="email" name="email" id="email" />
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="p-2 rounded-md" type="email" name="email" id="email" />
        </div>

        {/* message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            className="p-2 rounded-md"
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        {/* login */}
        <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md mt-3">Send</button>
      </div>
    </div>
  );
}
