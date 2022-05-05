import express from 'express';

import Category from '../models/Category.js';

const router = express.Router();

// GET all categories for a specific forum (api/v1/category)
router.get('/', async (req, res, next) => {
  try {
    const forum_id = req.query.forum;
    const categories = await Category.find({ forum_id });
    res.json(categories);
  } catch (error) {
    next(error);
  };
});

// GET a category
router.get('/:id', async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id).populate("forum_id");
    res.json(category);
  } catch (error) {
    return res.json({
      success: false,
      message: `category_id: ${req.params.id} not found.`
    });
  }
});

// POST a category to a forum (api/v1/category)
router.post('/', async (req, res, next) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.json({
      success: true,
      category
    });
  } catch (error) {
    next(error);
  }
});

export default router;
