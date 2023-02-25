import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/closed-carrot-logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white h-[100px] p-3">
      <div className="max-w-7xl mx-auto flex justify-between min-h-full items-center">
        <h1>
          <Link to="/">
            <img className="max-h-[35px]" src={Logo} alt="closed carrot logo" />
          </Link>
        </h1>

        <nav>
          <ul className="flex gap-12">
            <li className="max-w-xs">
              <Link
                className={
                  location.pathname === '/' ? 'underline decoration-4 decoration-orange-400' : null
                }
                to="/"
              >
                HOME
              </Link>
            </li>

            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}

            <li>
              <Link
                className={
                  location.pathname === '/about-us'
                    ? 'underline decoration-4 decoration-orange-400'
                    : null
                }
                to="/about-us"
              >
                ABOUT US
              </Link>
            </li>

            <li>
              <Link
                className={
                  location.pathname === '/contact-us'
                    ? 'underline decoration-4 decoration-orange-400'
                    : null
                }
                to="/contact-us"
              >
                CONTACT US
              </Link>
            </li>

            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
