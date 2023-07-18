const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createPost = require('./js/createPost');
const createComment = require('./js/createComment');

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type() {
      return true;
    }
  })
);

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json")
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/posts/latest', (req, res) => {
  const amount = Number(req.query.amount) || 5;
  const posts = createPost(amount).sort((a, b) => +a.created - +b.created);

  res.send({
    status: 'ok',
    data: posts
  });
});

app.get('/posts/:postId/comments/latest', (req, res) => {
  const id = req.params.postId;
  const amount = Number(req.query.amount) || 5;
  const comments = createComment(id, amount);

  res.send(JSON.stringify({
    status: 'ok',
    data: comments
  }));
});

const port = process.env.PORT || 7071;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});