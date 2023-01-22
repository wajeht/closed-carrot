import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-300 p-3">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1>
          <Link to="/">Mariposa Tech Hub</Link>
        </h1>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
