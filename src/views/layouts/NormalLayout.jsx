import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NormalLayout({ children }) {
  return (
    <div className="flex flex-col h-screen no-scrollbar overflow-y-auto">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
