const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pool: {
    type: Schema.Types.ObjectId,
    ref: 'pool'
  },
  members: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});
