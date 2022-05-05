import app from './app.js';

const { PORT: port } = process.env;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on http://localhost:${port}`);
});
