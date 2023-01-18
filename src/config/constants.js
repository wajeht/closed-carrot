import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const EXPRESS_PORT = process.env.EXPRESS_PORT;
export const REACT_PORT = process.env.REACT_PORT;
export const ENV = process.env.ENV;
export const MONGODB_URI = process.env.MONGODB_URI;
