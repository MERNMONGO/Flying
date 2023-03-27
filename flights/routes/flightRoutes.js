const express = require('express')

const router = express.Router()

const flightController = require('../controllers/flightController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for capLogs, attach it to router along with the controller logic
router.get('/', flightController.index)

// Setup a "new" route for creating capLog
router.get('/new', flightController.new)

// router.delete('/clear', flightController.delete)

// // Setup a "delete" route for removing a specific capLog
// router.delete('/:id', flightController.delete)

// // Setup a "update" route for updating a specific capLog
// router.put('/:id', flightController.update)

// router.post('/seed', flightController.seed)

// Setup a "create" route for adding capLog data
router.post('/', flightController.create)
router.post('/:flightid', flightController.createDestination)
// // Setup a "edit" route for editing a capLog
// router.get('/:id/edit', flightController.edit)

// Setup an "show" route for capLogs, attach it to router along with the controller logic
router.get('/:id', flightController.show)


module.exports = router;