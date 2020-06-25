const express = require("express")
const userRoute = require("./users")

const server = express()

server.use(express.json())// marrim akses tek body
server.use("/users", userRoute)

server.listen(3001, () => {
    console.log("Running on 3001")
})
