const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  suffix: {
    type: String,
    required: true
  },
  postal_code: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: 'Nederland'
  }
});

const PoolSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: AddressSchema,
  lane_count: Number
});

const Pool = mongoose.model('pool', PoolSchema);

module.exports = Pool;
