const { query } = require('express');
const Tour = require('../Models/tourModel');

// const fs = require('fs');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//   console.log(`Tour id is: ${val}`);

//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID'
//     });
//   }
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: 'fail',
//       message: 'Missing name or price'
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
 try {

  // Build QUERY
   const queryObj = { ...req.query }
   const excludedFields = ['page', 'sort', 'limit', 'fields'];
   excludedFields.forEach(el => delete queryObj[el]);
   
  // Advanced FILTERING
  // { difficulty: 'easy, duration: { $gte: 5 }} --> Obj we pass in query filter
  // { difficulty: 'easy, duration: { gte: 5 }} --> Obj we get from req.query
  let queryString = JSON.stringify(queryObj)
  queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

  console.log(queryObj);
  // console.log(JSON.parse(queryString));

  //  1 way to filter :- 
  // const query = Tour.find(queryObj); --> Simple Filter Query
  let query = Tour.find(JSON.parse(queryString)); // --> Advanced Pilter Query

  // 2 way to filter :-
  // const query = await Tour.find().where('duration').equals(5).where('difficulty').equals('easy')


  // EXECUTE QUERY
  const tours = await query;

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
 } catch (error) {
  res.status(404).json({
    status: 'fail',
    message: error
  })
 } 
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    })
  } catch (error) {
    res.status(404).json({
      status: fail,
      message: error
    })
  }
};

exports.createTour = async (req, res) => {
  try { 
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    })
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error
      })
    }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        tour
    }
  });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    }) 
  }
  
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
};
