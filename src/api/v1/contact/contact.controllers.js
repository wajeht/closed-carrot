import Mail from '../../../utils/mail.js';
import { ENV } from '../../../config/constants.js';
import { ENV_ENUM } from '../../../utils/enums.js';
import { saveContact } from './contact.helpers.js';

export async function postContact(req, res) {
  const { email, subject, message } = req.body;
  let saved;
  //! disable on production until we have official email account
  if (ENV === ENV_ENUM.DEVELOPMENT) {
    await Mail.send({
      from: email,
      subject,
      message,
    });

    //save to mongodb
    saved = await saveContact(email, subject, message);
  }

  // todo: use api.errors to create error message
  return saved
    ? res.success({ message: 'your message has been sent successfully!' })
    : res.status(500).send({ message: 'Error saving contact to mongodb' });
}
