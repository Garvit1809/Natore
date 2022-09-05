const dotenv = require('dotenv');
const mongoose = require('mongoose')

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');
dotenv.config({});

const PORT = process.env.PORT || 3000 ;
const CONNECTION_URL = process.env.MONGO_URI

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
  console.log('DB connection success') 
  )

  const server = app.listen(PORT, () => {
    console.log(`Server running to port ${PORT}`);
  })

  process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });

