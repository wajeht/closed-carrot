import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const EXPRESS_PORT = process.env.EXPRESS_PORT;

export const REACT_PORT = process.env.REACT_PORT;

export const ENV = process.env.ENV;

export const MONGODB_URI = process.env.MONGODB_URI;

export const EMAIL = {
  HOST: process.env.EMAIL_HOST,
  PORT: process.env.EMAIL_PORT,
  EMAIL: process.env.EMAIL_EMAIL,
  PASSWORD: process.env.EMAIL_PASSWORD,
};

export const DISCORD = {
  ID: process.env.DISCORD_ID,
  TOKEN: process.env.DISCORD_TOKEN,
  URL: process.env.DISCORD_URL,
};

export const SENTRY_URL = process.env.SENTRY_URL;
