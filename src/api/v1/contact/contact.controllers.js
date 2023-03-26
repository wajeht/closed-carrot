import Mail from '../../../utils/mail.js';
import { saveContact } from './contact.services.js';
import Discord from '../../../utils/discord.js';
import { EMAIL } from '../../../config/constants.js';

export async function postContact(req, res) {
  const { email, name, subject, message, forBearsOnly } = req.body;

  if (forBearsOnly != '') {
    return res.success({ message: 'your message has been sent successfully!' });
  }

  await Mail.send({
    from: `"${name}" <${email}>`,
    to: EMAIL.EMAIL,
    subject: `Contact Request from ${email}`,
    message: `
      <div>
        <p><span style="font-weight: bold;">Name:</span> ${name}</p>
        <p><span style="font-weight: bold;">Email:</span> ${email}</p>
        <p><span style="font-weight: bold;">Subject:</span> ${subject}</p>
        <p><span style="font-weight: bold;">Message:</span> ${message}</p>
      </div>
    `,
  });

  await saveContact(email, subject, message);

  await Discord.send({ message: subject, object: req.body });

  return res.success({ message: 'your message has been sent successfully!' });
}
