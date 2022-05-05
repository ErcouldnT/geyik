import express from 'express';

import Forum from '../models/Forum.js';

const router = express.Router();

// GET a forum and all forums (api/v1/forum)
router.get('/:id', async (req, res, next) => {
  try {
    if (req.params.id === 'all') {
      const forums = await Forum.find({});
      return res.json(forums);
    };
    const forum = await Forum.findById(req.params.id);
    if (forum) {
      return res.json(forum);
    };
  } catch (error) {
    return res.json({
      success: false,
      message: `forum_id: ${req.params.id} not found.`
    });
  };
});

// POST a forum (api/v1/forum)
router.post('/', async (req, res, next) => {
  try {
    const forum = new Forum(req.body);
    await forum.save();
    res.json({
      success: true,
      forum
    });
  } catch (error) {
    next(error);
  }
});

export default router;
