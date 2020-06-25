const express = require("express")

const usersRoutes = require("./services/users/index")

const server = express()

server.use(express.json())//parse the body when they are in json format

server.use("/users", usersRoutes)

server.listen(3005, () => { console.log("server is running a 3005") })