const express = require('express')
const router = express.Router()

const Park = require('../models/park.model')
const Coaster = require('../models/coaster.model')

router.get('/new', (req, res, next) => {

  Park.find()
  .then(allTheParks => res.render('coasters/new-coaster', {parks: allTheParks}))
  .catch(err => {
    console.log('Error al acceder al mandar los nombres de los parques a la view de new-coasters', err)
    next()  
  })
  
})

// router.post('/new', (req, res, next) =>{
  
// })



module.exports = router
