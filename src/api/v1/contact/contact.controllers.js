import Mail from '../../../utils/mail.js';
import { saveContact } from './contact.services.js';

export async function postContact(req, res) {
  const { email, subject, message } = req.body;

  await Mail.send({
    from: email,
    subject,
    message,
  });

  await saveContact(email, subject, message);

  return res.success({ message: 'your message has been sent successfully!' });
}
