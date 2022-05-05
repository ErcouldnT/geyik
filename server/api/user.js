import express from 'express';

import User from '../models/User.js';

const router = express.Router();

// GET all users for geyik.app (api/v1/user)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// POST an user for geyik.app (api/v1/user)
router.post('/', async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
});

export default router;
