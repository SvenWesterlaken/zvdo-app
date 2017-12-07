const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  heat: {
    type: Number,
    required: true
  },
  stroke: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  min_category: {
    type: Number,
    required: true
  },
  max_category: {
    type: Number,
    required: true
  }
})

const ScheduleSchema = new Schema({
  events: {
    type: [EventSchema],
    required: true,
  }
});

module.exports = ScheduleSchema;
