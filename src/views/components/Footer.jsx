import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <footer className="bg-slate-300 p-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between">
        <span>Copyright © 2022 </span>
        <nav>
          <ul className="flex gap-3">
            <li>
              <Link to="/terms-of-service">Terms of Services</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <a href="https://discord.gg/tXUBzt335A" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mariposa-Tech-Hub/mariposa-tech-hub-website"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
