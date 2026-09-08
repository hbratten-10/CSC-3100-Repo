// backend.js
import express from "express";
import cors from "cors";

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

app.use(cors());
app.use(express.json());


const findUserByName = (name) => {
  return users["users_list"].filter(
    (user) => user["name"] === name
  );
};


app.get("/users", (req, res) => {
  const name = req.query.name;
  const id = req.query.id;

  if (name != undefined && id != undefined) {
    let result = findUserByNameAndID(name, id);
    result = { users_list: result };
    res.send(result);
  } 
  else if (name != undefined) {
    let result = findUserByName(name);
    result = { users_list: result };
    res.send(result);
  } 
  else {
    res.send(users);
  }
});


const findUserById = (id) =>
  users["users_list"].find((user) => user["id"] === id);

//Assign ID method
const assignUserID = (user) => {
  const id = Math.floor(Math.random() * 1000000);
  user["id"]=id;
  return user;
};

//Post method
const addUser = (user) => {
  users["users_list"].push(user);
  return user;
};

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  assignUserID(userToAdd);
  addUser(userToAdd);
  res.status(201).send("Content created.");
});

//Delete method
const removeUser = (id) => {
  const index = users["users_list"].findIndex(user => user.id === id);

  if (index !== -1) {
    users["users_list"].splice(index, 1);
  }
};

app.delete("/users", (req, res) => {
  const idToRemove = req.body.id;
  removeUser(idToRemove);
  res.send();
});



//Get by name and id method
const findUserByNameAndID = (name, id) => {
  return users["users_list"].filter(
    (user) => user["name"] === name && user["id"] === id
  );
};


app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});