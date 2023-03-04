import Mail from '../../../utils/mail.js';
import { saveContact } from './contact.services.js';
import Discord from '../../../utils/discord.js';

export async function postContact(req, res) {
  const { email, subject, message, forBearsOnly } = req.body;

  if (forBearsOnly != '') {
    return res.success({ message: 'your message has been sent successfully!' });
  }

  await Mail.send({
    from: email,
    subject,
    message,
  });

  await saveContact(email, subject, message);

  await Discord.send({ message: subject, object: req.body });

  return res.success({ message: 'your message has been sent successfully!' });
}
