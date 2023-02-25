import './index.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

// layouts
import NormalLayout from './layouts/NormalLayout';
import HomeLayout from './layouts/HomeLayout';

// pages
import Home from './pages/Home';
import Users from './pages/Users';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

const queryClient = new QueryClient();

export default function App() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      {location.pathname === '/' ? (
        <HomeLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HomeLayout>
      ) : (
        <NormalLayout>
          <Routes>
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/users" element={<Users />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NormalLayout>
      )}
    </QueryClientProvider>
  );
}
