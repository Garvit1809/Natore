const express = require('express');
const tourController = require('./../Controllers/tourController');

const router = express.Router();

// router.param('id', tourController.checkID);  --> Param Middleware

router
  .route('/')
  .get(tourController.getAllTours)
  .post( tourController.createTour);
  // .post(tourController.checkBody, tourController.createTour); --> can pass middlewares like this

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
