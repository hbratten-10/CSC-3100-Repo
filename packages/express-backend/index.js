// backend.js
import express from "express";
import cors from "cors";
import userservices from "./user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


//Find by name
const findUserByName = (name) => {
 return userservices.findUserByName(name);
};

//Find by id
const findUserById = (id) =>{
  return userservices.findUserById(id);
  }


//Find by job
const findUserByJob = (job) =>{
  return userservices.findUserByJob(job);
  }

//Find by name and Job
const findUserByNameAndJob = (name, job) =>{
  return userservices.findUserByNameAndJob(name, job);
  }


//Get by name and id method
const getUsers=(name, job) => {
  return userservices.getUsers(name, job)
};


app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;

  getUsers(name, job)
    .then((result) => {
      res.send({ users_list: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error retrieving users");
    });
});


//Post method
const addUser = (user) => {
  return userservices.addUser(user);
};

app.post("/users", (req, res) => {
  const userToAdd = req.body;

  addUser(userToAdd)
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error adding user");
    });
});

//Delete method
const removeUser = (id) => {
  return userservices.removeUser(id);
};

app.delete("/users/:id", (req, res) => {
  const idToRemove = req.params.id;

  removeUser(idToRemove)
    .then((result) => {
      if (result != null) {
        res.status(204).send();
      } else {
        res.status(404).send("User not found.");
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Database error.");
    });
});


//Listening port
app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});