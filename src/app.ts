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

app.get('/', function (req: express.Request, res: express.Response) {
  const hello: string = 'Hello Worldzz!';
  res.send(hello);
});

app.get('/user/create/:name', function (req: express.Request, res: express.Response) {
  const newUser = new User({name: req.params.name});
  newUser.save((err, newUser) => {
    if (err) return logger.error(`Could not create newUser ${newUser}: ${err}` )
    logger.info(newUser)
    res.send(`created newUser: ${newUser}`);
  });
});

app.get('/user/all', function (req: express.Request, res: express.Response) {
  User.find(function (err, users) {
    if (err) return logger.error(err);
    logger.info(users)
    res.send('all-users');
  })
});


app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});