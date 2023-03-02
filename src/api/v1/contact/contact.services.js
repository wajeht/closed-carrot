import Contact from './contact.model.js';

export async function saveContact(email, subject, message) {
  return Contact.create({
    name: email,
    subject: subject,
    email: email,
    message: message,
  });
}
