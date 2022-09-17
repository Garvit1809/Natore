const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Tour = require('./../../Models/tourModel')
const Review = require('./../../Models/reviewModel');
const User = require('./../../Models/userModel');

dotenv.config({path: '../../config.env'});

// const PORT = process.env.PORT;
// const CONNECTION_URL = process.env.MONGO_URI

mongoose
  .connect("mongodb+srv://Garvit:Garvit18@cluster0.wva2c.mongodb.net/Natore?retryWrites=true&w=majority")
  .then(() => console.log('DB connection successful!'))
  .catch((error) => console.log('Hello'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
);


// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    await Tour.create(tours);
    await Review.create(reviews);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

