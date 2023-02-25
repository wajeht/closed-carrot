import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/closed-carrot-logo.png';

export default function Header() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    // <footer className="bg-[url('../assets/svgs/footer-background.svg')] bg-green-100 bg-contain shadow-md h-[200px]"></footer>
    <footer className="bg-green-100 bg-contain h-[200px]">
      <div className="max-w-7xl mx-auto flex flex-col justify-center gap-5 items-center min-h-full p-3">
        {/* logo */}
        <Link to="/">
          <img className="max-h-[35px]" src={Logo} alt="closed carrot logo" />
        </Link>

        {/* law */}
        <p className="text-center">
          Copyright © {currentYear} Closed Carrot. All rights reserved. Built with ❤️ by a group of
          awesome people!
        </p>

        {/* links */}
        <nav className="text-sm">
          <ul className="flex gap-3">
            <Link
              className={
                location.pathname === '/privacy-policy'
                  ? 'underline decoration-2 decoration-orange-400'
                  : null
              }
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <li>|</li>
            <Link
              className={
                location.pathname === '/terms-of-service'
                  ? 'underline decoration-2 decoration-orange-400'
                  : null
              }
              to="/terms-of-service"
            >
              Terms of Service
            </Link>
            <li>|</li>
            <li>
              <a href="https://discord.gg/tXUBzt335A" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="https://github.com/closed-carrot/website" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
