import { MONGODB_URI } from '../config/constants.js';
import mongoose from 'mongoose';

export async function init() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGODB_URI);

    console.log('db connection started!');
  } catch (e) {
    console.error('db connection failed!');
    process.exit(1);
  }
}

export function stop() {
  console.log('db connection stopped!');
  return mongoose.connection.close();
}
