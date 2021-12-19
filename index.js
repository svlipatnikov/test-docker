const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened");
  }

  console.log(`Server is listening on ${port}`);
});
