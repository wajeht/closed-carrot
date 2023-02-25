import React from 'react';
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
=======
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Images/Closed Carrot Logo_Icon_Transparent.png';
>>>>>>> Stashed changes

export default function Header() {
  return (
    <header className="bg-slate-300 p-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1>
          <Link to="/">🥕 Closed Carrot: Amarillo&apos;s Tech Hub</Link>
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
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
