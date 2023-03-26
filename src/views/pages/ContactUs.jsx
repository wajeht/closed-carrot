import React from 'react';
import ContactMap from '../components/ContactMap';
import ContactSocialIcons from '../components/ContactSocialIcons';
import ContactForm from '../components/ContactForm';
import ContactHero from '../components/ContactHero';

export default function ContactUs() {
  return (
    <div className="mn-h-full fade-in">
      <ContactHero />

      <br />
      <br />
      <br />

      <ContactSocialIcons />

      <br />
      <br />
      <br />

      <ContactForm />

      <br />
      <br />
      <br />

      <ContactMap />
    </div>
  );
}
