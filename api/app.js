import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Root path!");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/uptime", (req, res) => {
  res.send(process.uptime().toString());
});


export default app;
