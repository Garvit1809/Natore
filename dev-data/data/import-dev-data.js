const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Tour = require('./../../Models/tourModel')

dotenv.config();

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGO_URI

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log("Successful")
  )
  .catch((error) => console.log('Hello'));

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));
// const tours = fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8');
// console.log(tours);
// console.log(typeof(tours));

const importTours = async () => {
    try {
        await Tour.create(tours)
        console.log("Data added sucessfully");
    } catch (error) {
        console.log(error);
    }
}

importTours()

