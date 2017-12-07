const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  image: String,
  description: String,
  is_coach: {
    type: Boolean,
    default: false
  },
  is_admin: {
    type: Boolean,
    default: false
  },
  swimranking_id: Number,
  club_id: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
