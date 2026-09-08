// backend.js
import express from "express";

const users = {
  users_list: [
    {
      id: "xyz789",
      name: "Charlie",
      job: "Janitor"
    },
    {
      id: "abc123",
      name: "Mac",
      job: "Bouncer"
    },
    {
      id: "ppp222",
      name: "Mac",
      job: "Professor"
    },
    {
      id: "yat999",
      name: "fred",
      job: "Aspring actress"
    },
    {
      id: "zap555",
      name: "Dennis",
      job: "Bartender"
    }
  ]
};

const app = express();
const port = 8000;

app.use(express.json());


//Get by name and id method
const findUserByNameAndID = (name, id) => {
  return users["users_list"].filter(
    (user) => user["name"] === name && user["id"] === id
  );
};

//Either gets all the users, by name, or by name and id
//, depending on request
app.get("/users", (req, res) => {
  const name = req.query.name;
  const id = req.query.id;
  if (name != undefined && id != undefined) {
    let result = findUserByNameAndID(name, id);
    result = { users_list: result };
    res.send(result);
  } else if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } else {
    res.send(users);
  }
});

app.use(express.json());

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});