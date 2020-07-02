const express = require("express")//import express from 'express'
const studentsRoutes = require("./services/students")
const server = express()
server.use("/students", studentsRoutes)
server.listen(3001, () => { console.log("server is running at port 3001") })