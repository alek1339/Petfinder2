const express = require('express')
const router = express.Router()

const Animal = require('../models/Animal')

// TEST
router.get('/test', (req, res) => res.json({ msg: 'Animals Works' }))

// Add Animal
router.post('/add', (req, res) => {
  const newAnimal = new Animal({
    name: req.body.petName,
    picture: req.body.petPicture,
    breed: req.body.petBreed,
    gender: req.body.petGender,
    years: req.body.petYears
  })

  newAnimal
    .save()
    .then(animal => res.json(animal))
    .catch(err => console.log(err))
})

// Get Animals
router.get('/getAnimals', (req, res) => {
  Animal.find()
    .sort({ date: -1 })
    .then(cars => res.json(cars))
    .catch(err => res.status(404).json({ nocarsfound: 'No cars found' }))
})

router.post('/delete', (req, res) => {
  console.log(req.body)
  const id = req.body.id
  console.log('Del')
  Animal.findByIdAndRemove(id, (err, todo) => {
    // As always, handle any potential errors:
    if (err) return res.status(500).send(err)
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
      message: 'Todo successfully deleted',
      id: todo._id
    }
    return res.status(200).send(response)
  })
})

router.post('/edit', (req, res) => {
  const id = req.body.id

  Animal.findById(id)
    .sort({ date: -1 })
    .then(car => res.json(car))
    .catch(err => res.status(404).json({ nocarfound: 'No car found' }))
})

router.post('/edit-animal', (req, res) => {
  var id = req.body.id

  console.log(req.body)

  Animal.findByIdAndUpdate(id, { $set: req.body }, function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log('RESULT: ' + result)
    res.send('Done')
  })
})

module.exports = router
