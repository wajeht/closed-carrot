import nodemailer from 'nodemailer';
import { EMAIL } from '../config/constants.js';

class Mail {
  static send({ from = EMAIL.EMAIL, to, subject, message }) {
    const transporter = nodemailer.createTransport({
      host: EMAIL.HOST,
      port: EMAIL.PORT,
      auth: {
        user: EMAIL.EMAIL,
        pass: EMAIL.PASSWORD,
      },
    });

    return new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from,
          to,
          subject,
          html: message,
        },
        (error, info) => {
          if (error) {
            reject(error);
          }
          resolve(info);
        },
      );
    });
  }
}

export default Mail;
