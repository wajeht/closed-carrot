import React, { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/api/v1/contact', {
      subject,
      email,
      message,
    });
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      {/* form */}
      <form
        className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* subject */}
        <div className="flex flex-col gap-1">
          <label htmlFor="subject">Subject</label>
          <input
            className="p-2 rounded-md"
            type="text"
            name="subject"
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 rounded-md"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* login */}
        <button className="bg-slate-400 hover:bg-slate-500 p-2 rounded-md mt-3">Send</button>
      </form>
    </div>
  );
}
