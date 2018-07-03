const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8888;
const users = [
  {id: 1, username: 'admin', password: 'admin'},
  {id: 2, username: 'guest', password: 'guest'}
];

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  if(!req.body.username || !req.body.password) {
    res
    .status(400)
    .send("You need a username and password");
    return;
  }

  const user = users.find((u) => {
    return u.username === req.body.username && u.password === req.body.password
  });
})

app.get('/status', (req, res) => {
  const localTime = (new Date()).toLocaleTimeString();

  res
  .status(200)
  .send(`Server time is ${localTime}`);
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});