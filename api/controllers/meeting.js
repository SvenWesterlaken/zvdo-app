const mongoose = require('mongoose');
const Meeting = require('../models/meeting');
const _ = require('lodash');

module.exports = {

  read(req, res, next) {
    let id = req.params.id || '';
    if(id === '') {
      Meeting.find({}).catch(err => next(err)).then(meetings => res.send(meetings));
    } else {
      Meeting.findById(id).catch(err => next(err)).then(meeting => res.send(meeting));
    }
  },

  create(req, res, next) {

    if(_.isEmpty(req.body)) {
      res.status(422).json({ error: "Body is empty"});

      //TODO: lodash function that checks if the format of the meeting is as expected.
    } else {
      Meeting.findOne({ title: req.body.title, date: req.body.date }).catch((err) => next(err)).then((found_meeting) => {
        if(found_meeting) {
          res.status(409).json({ error: "Meeting already exists"});
        } else {
          let meeting = new Meeting(req.body);
          meeting.save().catch(err => next(err)).then(() =>
            res.status(201).json({ msg: "Meeting succesfully created"})
          );
        }
      });
    }

  },

  update(req, res, next) {
    let id = req.body._id || '';

    if(id != '') {

      Meeting.findByIdAndUpdate(id, req.body).catch(err => next(err)).then(() =>
        res.status(200).json({msg: "Meeting succesfully updated"})
      );

    } else {
      res.status(400).json({error: "Meeting ID not provided"});
    }
  },

  delete(req, res, next) {

    let id = req.params.id || '';

    if(id != '') {

      Meeting.findByIdAndRemove(id).catch(err => next(err)).then(() =>
        res.status(200).json({msg: "Meeting succesfully removed"})
      );

    } else {
      res.status(400).json({error: "Meeting ID not provided"});
    }

  }



}
