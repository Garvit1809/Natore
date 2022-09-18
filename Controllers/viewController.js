const Tour = require('../Models/tourModel')
const catchAsync = require('../Utils/catchAsync')

exports.getOverview = catchAsync( async (req, res) => {
    const tours = await Tour.find();

    res.status(200).render("overview", {
      title: "All Tours",
      tours
    })
  })

exports.getTour = (req, res) => {
  res.status(200).render("tour", {
    title: "The Forest Hiker",
  });
};
