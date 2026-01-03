// express is the main library that is used for creating a server in js 
const express = require("express");

// loads the file math.js and it is applying destructing, meaning that only the functions add and subtract are added
const { add, subtract } = require("./math");

// creating and initlizing the server, 0.0.0.0 means listen to all endpoints
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

// this tells the server what to do when / page is open 
app.get("/", (req, res) => {
  res.send("Hello from Kubernetes! The app is running.");
});

// this tells the server what to do when /add page is open 
app.get("/add", (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.send(`Result: ${add(a, b)}`);
});

// this tells the server what to do when / page is open 
app.get("/subtract", (req, res) => {
  const a = parseInt(req.query.a) || 0;
  const b = parseInt(req.query.b) || 0;
  res.send(`Result: ${subtract(a, b)}`);
});

// the server starts to listen for requests
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
