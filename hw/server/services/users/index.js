const express = require("express")
const path = require("path")
const fs = require("fs")
const { join } = require("path")
const route = express.Router()
const usersPath = join(__dirname, "users.json")
const getUSers = () => {
    const usersDataAsBuffer = fs.readFileSync(usersPath)
    const usersData = JSON.parse(usersDataAsBuffer)
    return usersData
}
route.get("/", (req, res) => {
    const users = getUSers()
    res.status(200).send(users)
})
//nxjerrim nje user specifik
route.get("/:id", (req, res) => {
    const users = getUSers()


    const specificUser = users.filter(user => user.id === req.params.id)
    res.status(200).send(specificUser)
})
module.exports = route