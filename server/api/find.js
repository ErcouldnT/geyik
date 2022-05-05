import express from 'express';

// import db models
import Forum from '../models/Forum.js';
import Category from '../models/Category.js';
import Issue from '../models/Issue.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const forumName = req.query.forum;
    if (forumName) {
      var forum = await Forum.findOne({ title: forumName });
    };

    const categoryName = req.query.category;
    if (categoryName && forum) {
      var category = await Category.findOne({
        title: categoryName,
        forum_id: forum._id
      });
    };

    const issueName = req.query.issue;
    if (issueName && category) {
      var issue = await Issue.findOne({
        title: issueName,
        category_id: category._id
      });
    };

    return res.json({
      forum,
      category,
      issue
    });
  } catch (error) {
    next(error)
  };
});

export default router;
