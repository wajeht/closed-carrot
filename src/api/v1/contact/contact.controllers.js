import Mail from '../../../utils/mail.js';
import { ENV } from '../../../config/constants.js';
import { ENV_ENUM } from '../../../utils/enums.js';

export async function postContact(req, res) {
  const { email, subject, message } = req.body;

  //! disable on production until we have official email account
  if (ENV === ENV_ENUM.DEVELOPMENT) {
    await Mail.send({
      from: email,
      subject,
      message,
    });
  }

  return res.success({ message: 'your message has been sent successfully!' });
}
