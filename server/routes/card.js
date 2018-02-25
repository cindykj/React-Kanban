const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const knex = require('../db/knex');
const Card = require('../models/Card');

const router = express.Router();

router.route(`/`)
  .get((req, res) => {
    return Card
      .fetchAll()
      .then(allCards => {
        // console.log(allCards.models)
        allCards.models.map((element) => {
          let {
            title,
            priority,
            created_by,
            assigned_to
          } = element.attributes
          return {
            title,
            priority,
            created_by,
            assigned_to
          };
        })
      })
      .then(result => {
        return res.render('/') //change this!
      })
      .catch(err => {
        return res.json({
          message: err.message,
          code: err.code
        })
      })

  })

  .post((req, res) => {
    let data = {
      title,
      priority,
      created_by,
      assigned_to
    } = req.body;
    if (!title || !priority || !created_by || !assigned_to) {
      return res.status(400).json({
        message: `Must enter values in all fields`
      });
    }
    return new Card(data)
      .save()
      .then(post => {
        return res.redirect('/'); //change this!
      })
      .catch(err => {
        return res.json({
          message: err.message,
          code: err.code
        })
      })
  }); //closing for POST NEW CARD

router.route(`/:id`)
  .put((req, res) => {
    Card.forge({
        id: req.params.id
      })
      .save({
        title: req.body.title,
        priority: req.body.priority,
        status: req.body.status,
        created_by: req.body.created_by,
        assigned_to: req.body.assigned_to
      })
      .then(result => {
        console.log(result)
        return res.redirect('/') //change this!
      })
      .catch(err => {
        return res.json({
          message: err.message,
          code: err.code
        })
      })
  }) //closing for put EDIT CARD
  .delete((req, res) => {
    let data = {
      title,
      priority,
      status,
      created_by,
      assigned_to
    } = req.body;
    data.id = req.body.id
    return new Card() 
      .where({
        id: req.params.id
      })
      .destroy()
      .then(result => {
        return res.redirect('/') //change this!
      })
      .catch(err => {
        return res.json({
          message: err.message,
          code: err.code
        })
      })
    })


module.exports = router;