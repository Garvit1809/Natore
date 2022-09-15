const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Tour = require('./../../Models/tourModel')

dotenv.config({path: '../../config.env'});

// const PORT = process.env.PORT;
// const CONNECTION_URL = process.env.MONGO_URI

mongoose
  .connect("mongodb+srv://Garvit:Garvit18@cluster0.wva2c.mongodb.net/Natore?retryWrites=true&w=majority")
  .then(() => console.log('DB connection successful!'))
  .catch((error) => console.log('Hello'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
// const tours = fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8');
// console.log(tours);
// console.log(typeof(tours));


// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Tour.create(tours);
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

