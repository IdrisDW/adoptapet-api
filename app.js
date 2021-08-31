 

const express = require("express");
const app = express();
 

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4001;
app.listen(PORT, () => {
  console.log("ITS ALIVE!!! Server listening on port ${PORT}");
});
 