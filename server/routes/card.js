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
        return allCards.models.map((element) => {
          let {
            title,
            priority,
            created_by,
            assigned_to
          } = element.attribut
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
      return res.redirect('/');
    })
    .catch(err => {
      return res.json({
        message: err.message,
        code: err.code
      })
    })
  }); //closing for POST NEW CARD


  // router.route('/')
  // .get((req, res) => {
  //   return Gallery // asking for instance, vs instantiating instance above at post
  //     .fetchAll()
  //     .then(allGallery => {
  //       return allGallery.models.map((element) => {
  //         let {
  //           author,
  //           link,
  //           description
  //         } = element.attributes
  //         return {
  //           author,
  //           link,
  //           description
  //         };
  //       })
  //     })
  //     .then(result => {
  //       return res.render('templates/gallery/index', {
  //         photo: result
  //       }); //probably change this to /index
  //     })
  //     .catch(err => {
  //       return res.json({
  //         message: err.message
  //       });
  //     })
  // }) // closing for get


module.exports = router;
