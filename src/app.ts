import * as bodyParser from "body-parser";
import mongoose from 'mongoose';
import express = require('express');
import { User } from './models/User'
import logger from "./utils/logger";


const app: express.Application = express();

import { MONGODB_URI } from "./utils/secrets";
import { userInfo } from "os";

// Connect to MongoDB
const mongoUrl = MONGODB_URI;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    logger.error("MongoDB connection error. Please make sure MongoDB is running. " + err);
});


app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});