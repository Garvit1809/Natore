const dotenv = require('dotenv');
const mongoose = require('mongoose')

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require('./app');
dotenv.config({path: './config.env'});

// console.log(process.env);

const PORT = process.env.PORT || 3000 ;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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

