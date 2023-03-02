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
    <div className="mn-h-full">
      <div className="w-full bg-desk bg-cover bg-center bg-[#FF8B46]">
        <div className="w-full flex flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
          <div className="flex justify-center items-center flex-col min-h-[300px] md:min-h-[500px]">
            <h2 className="text-white font-bold md:text-4xl text-xl mb-2  w-1/2 text-center">
              We&apos;d love to hear from you
            </h2>
            <p className="text-white font-light w-1/2 text-center">
              Have a question about business solutions or pricing? Our team is ready to answer all
              your questions! <br /> <br />
              Want to join Closed Carrot as a prospective member? Let us know, and we’ll help you
              get started!
            </p>
            <br />
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

        <div className="grid md:grid-cols-3 gap-3">
          {/* form */}
          <div className="md:col-span-2">
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
                className="px-5 py-3 text bg-orange-700 hover:bg-orange-500 text-white rounded-md"
                disabled={loading}
              >
                {loading === true ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* others */}
          <div className="flex flex-col items-center md:items-start gap-5">
            {/* email */}
            <div className="flex  gap-5 ">
              <button
                onClick={() => (window.location = 'mailto:yourmail@domain.com')}
                className="text-5xl hover:cursor:pointer;"
              >
                💌
              </button>
              <div>closedcarrot@gmail.com</div>
            </div>

            {/* phone */}
            <div className="flex  gap-5">
              <span className="text-5xl">☎️</span>
              <div>+1 (806)-881-6810 </div>
            </div>

            {/* address */}
            <div className="flex gap-5">
              <button className="text-5xl hover:cursor:pointer;">
                <a href="https://www.google.com/maps/place/701+SE+10th+Ave,+Amarillo,+TX+79101/@35.2026004,-101.8303009,3a,75y,63.87h,83.05t/data=!3m6!1e1!3m4!1szkGb41_z6aIajqwgoo46zw!2e0!7i16384!8i8192!4m5!3m4!1s0x87014f1d7b43cd63:0xf5e6505d8ef1da3d!8m2!3d35.2027826!4d-101.8300603">
                  📍
                </a>
              </button>
              <div>
                701 SE 10th,
                <br />
                Amarillo, TX 79101
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
