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

router.post('/new', (req, res, next) =>{
  const {name, description, inversions, length, park_id} = req.body
//  console.log({name, description, inversions, length, park_id})
  Coaster.create({name, description, inversions, length, park_id})
})

router.get('/', (req, res, next) => {

  Coaster.find()
  .populate('park_id')
  .then(allTheCoasters => res.render('coasters/coasters-index', {allTheCoasters}))
  .catch(err => {
    console.log('Error al acceder al mandar los datos del populate a la view de coasters-index', err)
    next()  
  })
})  

router.get('/:id', (req, res, next) => {
  const coasterId = req.params.id
  Coaster.findById(coasterId)
  .populate('park_id')
  .then(eachCoaster => res.render('coasters/coaster-details', {eachCoaster}))
  .catch(err => {
    console.log('Error al acceder al acceder a la view de coaster-details con el id de su parque', err)
    next()  
  })
})

module.exports = router
