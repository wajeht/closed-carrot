import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
  verification_token: {
    type: String,
    unique: true,
    require: false,
  },
  verified: {
    type: Boolean,
    require: true,
    default: false,
  },
  verified_at: {
    type: Date,
    require: false,
    default: null,
  },
  created_at: {
    type: String,
    require: false,
    default: new Date().toISOString(),
  },
});

export const User = mongoose.model('User', UserSchema);
