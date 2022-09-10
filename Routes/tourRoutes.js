const express = require('express');
const tourController = require('./../Controllers/tourController');
const authController = require('./../Controllers/authController');

const router = express.Router();

// router.param('id', tourController.checkID);  --> Param Middleware

router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours)

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(authController.protect, tourController.createTour);
  // .post(tourController.checkBody, tourController.createTour); --> can pass middlewares like this

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(authController.protect, authController.restrictTo('admin', 'lead-guide'), tourController.deleteTour);

module.exports = router;
