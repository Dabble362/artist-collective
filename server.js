const express = require("express");
const bootstrap = require('bootstrap')
const app = express();

const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello Express :)");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
