import { Contact } from './contact.model.js';

export async function saveContact(email, subject, message) {
  try {
    await Contact.create({
      name: email,
      subject: subject,
      email: email,
      message: message,
    });
    return true;
  } catch (err) {
    console.error('Error saving contact in mongodb: ', err.message);
    return false;
  }
}
