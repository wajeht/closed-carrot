import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: null,
    require: false,
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
    require: true,
  },
  verification_token: {
    type: String,
    unique: true,
    default: null,
    require: false,
  },
  verified: {
    type: Boolean,
    require: true,
    default: false,
  },
  aboutMe: {
    type: String,
    require: false,
  },
  member: {
    type: false,
    require: false,
  },
  admin: {
    type: false,
    require: false,
  },
  profilePictureUrl: {
    type: String,
    require: false,
  },
  socialMediaLinks: {
    type: Array,
    require: false,
  },
  verified_at: {
    type: Date,
    default: null,
    require: false,
  },
  created_at: {
    type: String,
    default: new Date().toISOString(),
    require: false,
  },
});

export default mongoose.model('User', UserSchema);
