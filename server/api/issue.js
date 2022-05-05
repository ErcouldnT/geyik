import express from 'express';

import Issue from '../models/Issue.js';

const router = express.Router();

// POST a issue for a category (api/v1/issue)
router.post('/', async (req, res, next) => {
  try {
    const issue = new Issue(req.body);
    await issue.save();
    res.json({
      success: true,
      issue
    });
  } catch (error) {
    next(error);
  }
});

// GET an issue
router.get('/:id', async (req, res, next) => {
  try {
    const issue = await Issue.findById(req.params.id)
      .populate({ path: 'category_id', select: 'title' })
      .populate({ path: 'user_id', select: 'username' });
    res.json(issue);
  } catch (error) {
    return res.json({
      success: false,
      message: `issue_id: ${req.params.id} not found.`
    });
  };
});

// GET all issues for a specific category (api/v1/issue)
router.get('/', async (req, res, next) => {
  try {
    const category_id = req.query.category;
    const issues = await Issue.find({ category_id });
    res.json(issues);
  } catch (error) {
    next(error);
  };
});

export default router;
