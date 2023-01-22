import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NormalLayout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-slate-400">
      <Header />
      <div className="flex-1 p-3 max-w-7xl mx-auto w-full">{children}</div>
      <Footer />
    </div>
  );
}
