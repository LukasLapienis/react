const mongoose = require('mongoose');

const connectingToDB = async () => {
  try {
    const connecting = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
    console.log(`Connected to ${connecting.connection.host}`);
  } catch (err) {
    console.log(`Could not connect ${err}`);
  }
};

module.exports = connectingToDB;
