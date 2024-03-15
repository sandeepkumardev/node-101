const express = require("express");

const app = express();
const port = 4000;

app.use(express.json());

// dummy database
let users = [];

app.get("/", (req, res) => {
  // return all users
  res.json(users);
});

app.post("/create", (req, res) => {
  const data = req.body;

  // generate unique id
  const id = Date.now();

  // create a new insatnce
  const newUser = {
    id: id,
    name: data.name,
    deg: data.deg,
  };

  users.push(newUser);

  res.json(newUser);
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  // validate required data
  if (!data.deg) {
    return res.status(400).send("deg is required");
  }

  // find user index
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).send("user not found");
  }

  // update value where user index exist
  users[userIndex].deg = data.deg;
  res.json(users[userIndex]);
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  // find user index
  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  delete users[userIndex];
  res.send("User deleted!");
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
