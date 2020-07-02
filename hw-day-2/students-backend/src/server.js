const express = require("express")//import express from 'express'
const studentsRoutes = require("./services/students")
const server = express()
const cors = require("cors")
server.use(cors())
server.use(express.json())//nxjerrim te dhenat nga body vetem kur jane ne formatin e json

server.use("/students", studentsRoutes)
server.listen(3001, () => { console.log("server is running at port 3001") })