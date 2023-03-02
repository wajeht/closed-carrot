import React, { useRef, useEffect, useState, createPortal } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/closed-carrot-logo.png';
import { GrMenu, GrClose } from 'react-icons/gr';

export default function Header() {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showMobileMenu && ref.current && !ref.current.contains(e.target)) {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [showMobileMenu]);

  return (
    <header className="bg-white py-10 px-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <h1>
          <Link to="/">
            <img className="max-h-[35px]" src={Logo} alt="closed carrot logo" />
          </Link>
        </h1>

        {/* desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            <li className="max-w-xs">
              <Link
                className={
                  location.pathname === '/' ? 'underline decoration-4 decoration-orange-500' : null
                }
                to="/"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                className={
                  location.pathname === '/about-us'
                    ? 'underline decoration-4 decoration-orange-500'
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
                    ? 'underline decoration-4 decoration-orange-500'
                    : null
                }
                to="/contact-us"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>

        {/* mobile menu */}

        {/* open button */}
        {!showMobileMenu && (
          <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <GrMenu className="text-2xl" />
          </button>
        )}

        {/* close */}
        {showMobileMenu && (
          <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <GrClose className="text-2xl" />
          </button>
        )}

        {/* mobile menu nav */}
        {showMobileMenu && (
          <nav
            ref={ref}
            className="absolute bg-orange-500 p-5 rounded-md shadow-xl min-w-full min-h-full top-10 z-10"
          >
            <ul className="flex flex-col gap-5 ">
              <li
                className={
                  location.pathname === '/'
                    ? 'bg-white rounded-md p-2 min-w-full min-h-full font-bold text-center'
                    : 'text-white font-bold text-center'
                }
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Link to="/">HOME</Link>
              </li>

              <li
                className={
                  location.pathname === '/about-us'
                    ? 'bg-white rounded-md p-2 min-w-full min-h-full font-bold text-center'
                    : 'text-white font-bold text-center '
                }
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Link to="/about-us">ABOUT US</Link>
              </li>

              <li
                className={
                  location.pathname === '/contact-us'
                    ? 'bg-white rounded-md p-2 min-w-full min-h-full font-bold text-center'
                    : 'text-white font-bold text-center'
                }
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Link to="/contact-us">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
