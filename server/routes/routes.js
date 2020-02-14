const express = require('express')
const router = express.Router()
const stringModel = require('../models/models.js')

router.get('/', async (req, res) => {
    console.log("Hello!");
    await stringModel.getStrings()
    .then(strings => res.send(strings))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

router.post('/', async (req, res) => {
    await stringModel.insertString(req.body)
    .then(post => res.status(201).json({
        message: `The string has been added`,
        content: post
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router
