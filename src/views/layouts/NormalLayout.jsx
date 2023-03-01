import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NormalLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-col md:flex-1 md:flex-row">{children}</div>
      <Footer />
    </div>
  );
}
