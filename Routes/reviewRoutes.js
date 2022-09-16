const express = require("express");
const reviewController = require("../Controllers/reviewController");
const authController = require("../Controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.createReview
  );

router.route('/:id')
.patch(reviewController.updateReview)
.delete(reviewController.deleteReview)

module.exports = router;
