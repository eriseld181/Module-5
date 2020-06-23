const express = require("express")
const userRoute = require("./users")
const server = express()
server.use("user", userRoute)

server.listen(3001, () => {
    console.log("3001")


})
