const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const auth = require('../auth/token');
const neo4j = require('../db/neo4j');

const User = require('../models/user');

module.exports = {

  //Register a new user = Create
  register(req, res, next) {
    let body = req.body;

    if(_.isEmpty(body)) {
      res.status(422).json({ error: "Body is empty"});
    } else {
      User.findOne({ email: body.email }).catch(err => next(err)).then((user) => {
        if(!user) {
          let user = new User(body);
          user.save().catch(err => next(err)).then((user) => {
            neo4j.run('CREATE (user:User {id: {id}}) RETURN user', { id: user._id.toString() })
            .catch(err => next(err)).then((result) => {
              res.status(201).json({ msg: "User succesfully created"});
              neo4j.close();
            })
          });
        } else {
          res.status(409).json({ error: "User already exists"});
        }
      });
    }
  },

  //Login
  login(req, res, next) {
    let email = req.body.email || '';
    let password = req.body.password || '';

    if(email != '' || password != '') {

      User.findOne({ email: email }).catch((err) => next(err)).then((user) => {

        if(user) {
          bcrypt.compare(password, user.password).catch((err) => next(err)).then((valid) => {

            if(valid) {
              var token = auth.encodeToken(user).catch((err) => next(err)).then((token) => {
                res.status(200).json({ token: token });
              });
            } else {
                res.status(401).json({ error: "Invalid password"});
            }

          });

        } else {
          res.status(404).json({error: "User not found"});
        }

      });

    } else {
      res.status(400).json({error: "Invalid Login Credentials"});
    }
  },

  update(req, res, next) {
    let id = req.body._id || '';

    if(id != '') {

      User.findByIdAndUpdate(id, req.body).catch(err => next(err)).then(() =>
        res.status(200).json({msg: "User succesfully updated"})
      );

    } else {
      res.status(400).json({error: "User ID not provided"});
    }
  },

  delete(req, res, next) {

    let id = req.params.id || '';

    if(id != '') {

      User.findByIdAndRemove(id).catch(err => next(err)).then(() =>
        res.status(200).json({msg: "User succesfully removed"})
      );

    } else {
      res.status(400).json({error: "User ID not provided"});
    }

  },

  profile(req, res, next) {
    res.send(req.user);
  }

}
