// Setup empty JS object to act as endpoint for all routes
projectData = {};

//added express to make a server with routes
const express = require("express");

//add instance of app
const app = express();

//Dependencies and middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
// using these middlewares and cross origin
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//pointing at the main project folder
app.use(express.static("website"));

//creatin server
const port = 3000;
const server = app.listen(port, () => {
  console.log(`running on localhost:${port}`);
});

//Setting a POST route
app.post("/add", (req, res) => {
  projectData = req.body;
  res.send(projectData);
});

//Setting a GET route
app.get("/all", (req, res) => {
  res.send(projectData);
});
