const express = require("express");
const bodyParser = require("body-parser");
const storage = require("./storage")();

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/books', (req, res) => {
  res.json(storage.get());
  res.send("Get books");
});

app.get('/books/:id', (req, res) => {
  const result = storage.find(req.params.id)
  res.send(result);
});

app.post('/books', (req, res) => {
  const result = storage.save(req.body);
  res.send(result);
});

app.put('/books/:id', (req, res) => {
  const result = storage.update(req.params.id, req.body);
  res.send(result);
});

app.delete('/books/:id', (req, res) => {
  const result = storage.delete(req.params.id);
  res.send(result);
});

app.listen(PORT, () => {
  console.log("Server started...")
});