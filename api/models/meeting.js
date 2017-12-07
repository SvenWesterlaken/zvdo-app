const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = require('./schedule');

const MeetingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  pool: {
    type: Schema.Types.ObjectId,
    ref: 'pool'
  },
  schedule: {
    type: ScheduleSchema,
    required: true
  },
  events_pdf: String,
  results: String
});

const Meeting = mongoose.model('meeting', MeetingSchema);

module.exports = Meeting;
