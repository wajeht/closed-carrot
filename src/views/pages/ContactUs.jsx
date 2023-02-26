import React, { useState } from 'react';
import axios from 'axios';

// import Desk from '/assets/images/marketing/supplies-on-desk.png';

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
    <>
      <div className="flex h-screen justify-center items-center flex-col max-h-[500px]">
        <div
          style={{
            backgroundImage: 'url(../assets/images/marketing/supplies-on-desk.png)',
          }}
          className="w-full h-screen  bg-cover bg-center"
        >
          <div className="w-full h-full flex  flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
            <h2 className="text-white font-bold text-4xl w-1/2 text-center">
              We&apos;d love to hear from you
            </h2>
            <p className="text-white font-light w-1/2 text-center">
              Whether you have a question about features, trials, pricing, need a demo, or anything
              else, our team is ready to answer all your questions
            </p>
          </div>
        </div>
      </div>

      <br />

      <div className="mx-auto w-full max-w-7xl p-3">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get in touch with us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>

        <br />
        <br />

        <div className="grid grid-cols-3 gap-3">
          {/* form */}
          <div className="col-span-2">
            <form
              className="rounded-md flex flex-col gap-3  max-w-2xl w-full"
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
                  className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100"
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
                  className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100"
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
                  className="p-2 rounded-md disabled:bg-slate-300 bg-orange-50 border border-orange-100"
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
                className="px-5 py-3 text bg-orange-500 hover:bg-orange-600 text-white rounded-md"
                disabled={loading}
              >
                {loading === true ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* others */}
          <div className="flex flex-col gap-5">
            {/* email */}
            <div className="flex  gap-5">
              <span className="text-5xl">💌</span>
              <div>closedcarrot@gmail.com</div>
            </div>

            {/* phone */}
            <div className="flex  gap-5">
              <span className="text-5xl">☎️</span>
              <div>+1 (123) 456-7890</div>
            </div>

            {/* address */}
            <div className="flex  gap-5">
              <span className="text-5xl">📍</span>
              <div>
                A108 Adam Street
                <br />
                New York, NY 535022
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
