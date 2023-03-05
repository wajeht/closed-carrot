import React, { useState } from 'react';
import axios from 'axios';

export default function ContactUs() {
  const [subject, setSubject] = useState('');
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
        forBearsOnly,
      })
      .then(() => {
        // clear the form
        setSubject('');
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
    <div className="mn-h-full">
      <div className="w-full bg-desk bg-cover bg-center bg-[#FF8B46]">
        <div className="w-full flex flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
          <div className="flex justify-center items-center flex-col min-h-[300px] md:min-h-[500px]">
            <h2 className="text-white font-bold md:text-4xl text-xl mb-2 text-center">
              We&apos;d love to hear from you
            </h2>
            <p className="text-white w-1/2 font-light text-center">
              Have a question about business solutions or pricing? Our team is ready to answer all
              your questions! Want to join Closed Carrot as a prospective member? Let us know, and
              we’ll help you get started!
            </p>
            <br />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="mx-auto w-full max-w-7xl p-3">
        <div className="flex sm:flex-row flex-col justify-center gap-10 lg:gap-56">
          {/* address */}
          <div className="flex flex-col gap-3 items-center">
            <span className="text-6xl">📍</span>
            <p className="font-bold">ADDRESS</p>
            <p>701 SE 10th, Amarillo, TX 79101</p>
          </div>

          {/* address */}
          <div className="flex flex-col gap-3 items-center">
            <span className="text-6xl">☎️</span>
            <p className="font-bold">PHONE</p>
            <p>+1 (806)-881-6810</p>
          </div>

          {/* address */}
          <div className="flex flex-col gap-3 items-center">
            <span className="text-6xl">💌</span>
            <p className="font-bold">EMAIL</p>
            <p>closedcarrot@gmail.com</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <iframe
        title="closed carrot google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.147988763759!2d-101.8322489838222!3d35.202782580308494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87014f1d7b43cd63%3A0xf5e6505d8ef1da3d!2s701%20SE%2010th%20Ave%2C%20Amarillo%2C%20TX%2079101!5e0!3m2!1sen!2sus!4v1677884091234!5m2!1sen!2sus"
        style={{ border: 0, minHeight: '500px', minWidth: '100%' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <br />
      <br />

      <div className="mx-auto w-full max-w-7xl p-3">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get in touch with us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
              value={subject}
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
              value={email}
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

      <br />
    </div>
  );
}
