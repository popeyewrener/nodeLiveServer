const mongoose = require('mongoose');

const mongooseConnector = async (databaseUrl) => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Set Mongoose options globally
    //mongoose.set('useCreateIndex', false);
    //mongoose.set('useFindAndModify', false);

    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

module.exports = mongooseConnector;
