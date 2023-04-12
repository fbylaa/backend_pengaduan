const express = require('express')
const UsersCtrl = require("../controllers/usersControl")

const users = express.Router()

//user
users.get("/users",UsersCtrl.getAll)
users.get("users/:id",UsersCtrl.getById)
users.post("/users",UsersCtrl.insert)
users.put("users/:id",UsersCtrl.edit)
users.delete("users/:id",UsersCtrl.delete)

module.exports = users