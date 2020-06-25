const express = require("express")
const studentRoutes = require("./services/student")
const server = express()
const port = process.env.PORT

server.use(express.json())

server.use("/student", studentRoutes)
server.listen(port, () => {
    console.log(`server is running at ${port}`)
})