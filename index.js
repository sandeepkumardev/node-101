const express = require("express");
const { create, update } = require("lodash");

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  const data = req.query;
  console.log(data);

  res.send("hello nodejs");
});

app.post("/create", (req, res) => {
  const data = req.body;
  console.log(data);

  // ..

  res.json(data);
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const { authorization } = req.headers;

  // validate token
  // validate user

  // update

  console.log(authorization);
  res.send(`update with id ${id}`);
});

app.listen(port, () => {
  console.log("server is running!");
});

/**
 *crud --

 *create- post
 *read - get
 *update - put
 *delete - delete
 */

/**
 * query - database
 * params - id
 * headers - auth
 * body - create
 */
