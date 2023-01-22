import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <footer className="flex justify-between">
      <span>Copyright © 2022️</span>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/terms-of-service">Terms of Services</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
