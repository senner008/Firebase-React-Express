const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(cors())

const checkIfAdmin = require("./middlewares.js")

app.use(express.static(path.join(__dirname, 'build')));

app.post('/auth', checkIfAdmin, async (_, res) => {
  return res.send({body : "Main content"});
});

app.post('/getName', checkIfAdmin, async (req, res) => {
  const firstName = req.body.user.split(" ")[0];
  fetch(`https://azurenodefunc.azurewebsites.net/api/HelloWorldTrigger?name=${firstName}`)
    .then(response => response.text())
    .then(response => res.send({body : response}))
});

app.get(['/', '*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


