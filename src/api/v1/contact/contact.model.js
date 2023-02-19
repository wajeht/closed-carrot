import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
    require: false,
  },
});

export const User = mongoose.model('Contact', ContactSchema);
