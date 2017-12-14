const mongoose = require('mongoose');
const neo4j = require('../db/neo4j');
const Meeting = require('../models/meeting');
const _ = require('lodash');

module.exports = {

  read(req, res, next) {
    let id = req.params.id || '';
    if(id === '') {
      Meeting.find({}).catch(err => next(err)).then(meetings => res.send(meetings));
    } else {
      Meeting.findById(id).populate('pool').catch(err => next(err)).then(meeting => res.send(meeting));
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
            neo4j.run('CREATE (meeting:Meeting {id: {id}}) RETURN meeting', { id: meeting._id.toString() })
            .catch(err => next(err)).then((result) => {
              res.status(201).json({ msg: "Meeting succesfully created"});
              neo4j.close();
            })

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

  },

  attend(req, res, next) {

    const meeting_id = req.params.id;
    const heats = req.body.heats;
    const user_id = req.user._id;

    let query = `MATCH (u:User {id: '${user_id}' }), (m:Meeting {id: '${meeting_id}'})`

    heats.forEach((heat, i) => {
      query += ` MERGE (u)-[:SWIMS {heat: ${heat}}]->(m)`;
    });

    query += ';'

    neo4j.run(query, {}).catch(err => next(err)).then((result) => {
      res.status(200).json({msg: 'Relationships succesfully created'});
      neo4j.close();
    });

  },

  entries(req, res, next) {

    const user_id = req.user._id;
    const meeting_id = req.params.id

    neo4j.run('MATCH (u:User {id: {user_id}})-[r:SWIMS]->(m:Meeting {id: {meeting_id}}) RETURN DISTINCT r;', { user_id: user_id.toString(), meeting_id: meeting_id.toString() }).catch(err => next(err)).then((result) => {

      let entries = result.records.map((record) => {
        return record.get('r').properties.heat.toNumber();
      });

      neo4j.close();
      res.status(200).json({ heats: entries });
    });

  }





}
