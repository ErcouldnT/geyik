// TODO: add Auth middleware for uploading something
const soSimpleAuth = (req, res, next) => {
  // take token from body
  // validate it from db
  // if validate go next
  // else res.status(401) and error unauthorized
  // res.json message: wrong password, try again
};

const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
  });
};

export default {
  notFound,
  errorHandler,
  soSimpleAuth
};
