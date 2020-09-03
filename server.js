const express = require('express');
const chalk = require('chalk');

const connectDB = require('./config/db');

const app = express();
// connect to mongoDB
connectDB();

// Init Middleware // used for body parser
app.use(express.json({ extended: false }));

// Define Routes
app.use(
  'api/stripe/createAccount',
  require('./routes/api/createStripeAccount')
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(chalk.blue(`Server is started on Port ${PORT}`))
);
