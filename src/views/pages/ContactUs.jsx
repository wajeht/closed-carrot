import React, { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/api/v1/contact', {
        subject,
        email,
        message,
      })
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setErrors([]);

        // clear the form
        setSubject('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setErrors(error.response.data.errors.map((e) => e.msg));
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      {/* form */}
      <form
        className="bg-slate-200 rounded-md p-5 flex flex-col gap-3 shadow-md max-w-md w-full"
        onSubmit={handleSubmit}
      >
        {/* error */}
        {success === false && errors.length > 0 ? (
          <p className="bg-red-200 p-4 rounded-md">{errors}</p>
        ) : null}

        {/* success */}
        {success === true ? (
          <p className="bg-green-200 p-4 rounded-md">You&apos;re message has been sent!</p>
        ) : null}

        {/* subject */}
        <div className="flex flex-col gap-1">
          <label htmlFor="subject">Subject</label>
          <input
            className="p-2 rounded-md disabled:bg-slate-300"
            type="text"
            name="subject"
            id="subject"
            required
            disabled={loading}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 rounded-md disabled:bg-slate-300"
            type="email"
            name="email"
            id="email"
            required
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            className="p-2 rounded-md disabled:bg-slate-300"
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            disabled={loading}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* login */}
        <button
          className="bg-slate-400 hover:bg-slate-500 disabled:bg-slate-300 p-2 rounded-md mt-3"
          disabled={loading}
        >
          {loading === true ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
