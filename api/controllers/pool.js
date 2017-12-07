const mongoose = require('mongoose');
const _ = require('lodash');

const Pool = require('../models/pool');

module.exports = {

  read(req, res, next) {
    let id = req.params.id || '';

    if(id === '') {
      Pool.find({}).catch(err => next(err)).then(pools => res.send(pools));
    } else {
      Pool.findById(id).catch(err => next(err)).then(pool => res.send(pool));
    }
  },

  create(req, res, next) {

    if(_.isEmpty(req.body)) {
      res.status(422).json({ error: "Body is empty"});
    } else {
      Pool.findOne({ name: req.body.name }).catch((err) => next(err)).then((found_pool) => {
        if(found_pool) {
          res.status(409).json({ error: "Pool already exists"});
        } else {
          let pool = new Pool(req.body);
          pool.save().catch(err => next(err)).then(() =>
            res.status(201).json({ msg: "Pool succesfully created"})
          );
        }
      });
    }

  },

  update(req, res, next) {
    let id = req.body._id || '';

    if(id != '') {

      Pool.findByIdAndUpdate(id, req.body).catch(err => next(err)).then(() =>
        res.status(200).json({msg: "Pool succesfully updated"})
      );

    } else {
      res.status(400).json({error: "Pool ID not provided"});
    }
  },

  delete(req, res, next) {

    let id = req.params.id || '';

    if(id != '') {

      Pool.findByIdAndRemove(id).catch(err => next(err)).then(() =>
        res.status(200).json({msg: "Pool succesfully removed"})
      );

    } else {
      res.status(400).json({error: "Pool ID not provided"});
    }

  }

}
