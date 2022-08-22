const dotenv = require('dotenv');
const mongoose = require('mongoose')
const app = require('./app');

dotenv.config({});

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGO_URI

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running to port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));

