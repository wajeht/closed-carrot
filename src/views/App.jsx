import './index.css';

import React from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}
