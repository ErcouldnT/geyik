import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import middlewares from '../middlewares.js';

// import api routes
import forum from './forum.js';
import category from './category.js';
import issue from './issue.js';
import message from './message.js';
import user from './user.js';
import find from './find.js';

const router = express.Router();
router.use(express.json());
router.use(helmet());
router.use(cors());

// api root (api/v1)
router.get('/', async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: 'Surprise motherfucker!'
    });
  } catch (error) {
    next(error)
  };
});

// use api routes
router.use('/forum', forum);
router.use('/category', category);
router.use('/issue', issue);
router.use('/message', message);
router.use('/user', user);
router.use('/find', find);

// middlewares
router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

export default router;
