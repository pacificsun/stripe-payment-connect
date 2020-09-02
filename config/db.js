const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const chalk = require('chalk');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(chalk.yellow('MongoDb Connected...'));
  } catch (err) {
    console.error(chalk.red(err.message));
    process.exit(1);
  }
};

module.exports = connectDB;
