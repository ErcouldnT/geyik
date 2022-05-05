import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { handler } from '../geyik/build/handler.js';
import api from './api/index.js';

mongoose.connect(process.env.MONGO_URI, (error) => {
  console.log(error
    ? `Mongo failed: ${error.message}`
    : 'Mongo connected!');
});

const app = express();
app.use(morgan('dev'));
app.enable('trust proxy');
// TODO: add rate limiter and slow down here for all over app

// main api route
app.use('/api/v1', api);

// catch-all on client
app.use(handler);

export default app;
