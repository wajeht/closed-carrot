import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <footer className="bg-slate-300 p-3 shadow-md">
      <div className="max-w-7xl mx-auto flex  md:flex-row items-center flex-col-reverse gap-5 md:gap-3 justify-between">
        <div className="w-full text-center md:text-left">
          Copyright © 2022 Closed Carrot: Amarillo&apos;s Tech Hub App. All rights reserved
        </div>
        <nav className="flex justify-evenly md:justify-end md:gap-3 w-full">
          {/* law */}
          <ul className="flex flex-col md:flex-row gap-3">
            <li>
              <Link to="/terms-of-service">Terms of Services</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>

          {/* social */}
          <ul className="flex flex-col md:flex-row gap-3">
            <li>
              <a href="https://discord.gg/tXUBzt335A" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a href="https://github.com/closed-carrot/app" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
