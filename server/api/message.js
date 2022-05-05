import express from 'express';

import Message from '../models/Message.js';

const router = express.Router();

// POST a message for an issue (api/v1/message)
router.post('/', async (req, res, next) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.json({
      success: true,
      message
    });
  } catch (error) {
    next(error);
  }
});

// GET a message
router.get('/:id', async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id)
      .populate({ path: 'issue_id', select: 'title' })
      .populate({ path: 'user_id', select: 'username' });
    res.json(message);
  } catch (error) {
    return res.json({
      success: false,
      message: `message_id: ${req.params.id} not found.`
    });
  };
});

// GET all messages for a specific issue (api/v1/message)
router.get('/', async (req, res, next) => {
  try {
    const issue_id = req.query.issue;
    const messages = await Message.find({ issue_id });
    res.json(messages);
  } catch (error) {
    next(error);
  };
});

export default router;
