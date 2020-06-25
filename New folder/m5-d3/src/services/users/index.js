const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")
const { inflate } = require("zlib")

const router = express.Router()

const readFile = (filename) => {
    const buffer = fs.readFileSync(path.join(__dirname, filename))
    return JSON.parse(buffer.toString())
}

router.get("/", (req, res) => {
    //get the localhost:3001/users
    const userDB = readFile("users.json")

    if (req.query && req.query.name) {
        const filteredUsers = userDB.filter((user) => user.hasOwnProperty("name") && user.name === req.query.name)

        res.send(filteredUsers)
    } else {
        res.send(userDB)
    }

})

router.post("/",)

module.exports = router