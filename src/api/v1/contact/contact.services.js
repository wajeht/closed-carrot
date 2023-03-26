import Contact from './contact.model.js';

export async function saveContact({ name, email, subject, message }) {
  return Contact.create({
    name: name,
    subject: subject,
    email: email,
    message: message,
  });
}
