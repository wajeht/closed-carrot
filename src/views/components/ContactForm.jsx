import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [forBearsOnly, setTrap] = useState('');
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
        name,
        forBearsOnly,
      })
      .then(() => {
        // clear the form
        setSubject('');
        setName('');
        setEmail('');
        setMessage('');

        setSuccess(true);
        setLoading(false);
        setErrors([]);
      })
      .catch((error) => {
        setErrors(error.response.data.errors.map((e) => e.msg));
        setLoading(false);
      });
  }
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-3">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's Connect&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>

        <br />
        <br />

        {/* form */}
        <form
          className="rounded-md flex flex-col gap-7 mx-auto  max-w-7xl w-full"
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

          {/* name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="subject">Name</label>
            <input
              className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100 focus:outline-none focus:border-orange-400"
              type="text"
              name="name"
              id="name"
              required
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* subject */}
          <div className="flex flex-col gap-1">
            <label htmlFor="subject">Subject</label>
            <input
              className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100 focus:outline-none focus:border-orange-400"
              type="text"
              name="subject"
              id="subject"
              required
              disabled={loading}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100 focus:outline-none focus:border-orange-400"
              type="email"
              name="email"
              id="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* message */}
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100 focus:outline-none focus:border-orange-400"
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              disabled={loading}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* honeypot */}
          <div className="hidden">
            <label htmlFor="forBearsOnly">
              YOU DONT HAVE TO DO THIS BBGRL LET ME TAKE YOU AWAY FROM ALL THIS
            </label>
            <input
              className=""
              type="text"
              name="forBearsOnly"
              id="forBearsOnly"
              disabled={loading}
              onChange={(e) => setTrap(e.target.value)}
            />
          </div>

          {/* login */}
          <button
            className="px-5 py-3 text bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold w-4/12 mx-auto"
            disabled={loading}
          >
            {loading === true ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </>
  );
}
