const express = require('express');
const router = express.Router();
const stringModel = require('../models/models.js');

router.get('/', (req, res) => {
  console.log('Hello!');
  stringModel
    .getStrings()
    .then(strings => {
      console.log(strings);
      res.send(strings);
    })
    .catch(err => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

router.post('/', (req, res) => {
  console.log('body', req.body.string);
  stringModel
    .insertString(req.body.string)
    .then(post => {
      console.log('our posted', post);
      res.status(201).json({
        message: `The string has been added`,
        content: post,
      });
    })
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;
