const express = require("express")
const userPath = require("./server/services/users")
const server = express()
server.use(express.json())
server.use("/users", userPath)
server.listen(3000, () => {
    console.log("server is running")
}
)