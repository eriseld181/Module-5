/* WHAT WE WOULD LIKE TO ACHIEVE 
1. get all users' data on url: localhost:3001/users/ GET
2. get single user's data on url: localhost:3001/users/:id GET
3. create single user record on url: localhost:3001/users/ POST
4. modify single user's data on url: localhost:3001/users/:id PUT
5. delete single user's data on url: localhost:3001/users/:id DELETE
*/

const express = require("express") // third party module
const fs = require("fs") // core module dedicated to file system interactions
const path = require("path") // core module
const uniqid = require("uniqid")

const router = express.Router()

const usersFilePath = path.join(__dirname, "users.json")
// 1.
router.get("/", (request, response) => {

    const fileContentAsABuffer = fs.readFileSync(usersFilePath)
    const fileContent = fileContentAsABuffer.toString()

    response.send(JSON.parse(fileContent))
})

// 2.
router.get("/:id", (request, response) => {
    const fileContentAsABuffer = fs.readFileSync(usersFilePath)
    const userArray = JSON.parse(fileContentAsABuffer.toString())

    const user = userArray.filter((user) => user.id === request.params.id)

    response.send(user)
})
// 3.
router.post("/", (request, response) => {
    console.log(request.body)
    const newUser = { id: uniqid(), ...request.body }

    const fileContentAsABuffer = fs.readFileSync(usersFilePath)
    const usersArray = JSON.parse(fileContentAsABuffer.toString())

    usersArray.push(newUser)

    fs.writeFileSync(usersFilePath, JSON.stringify(usersArray))
    response.status(201).send(newUser)
})

// 4.
router.put("/:id", (request, response) => {
    const fileContentAsABuffer = fs.readFileSync(usersFilePath)
    const usersArray = JSON.parse(fileContentAsABuffer.toString())


    const filterUsersArray = usersArray.filter((user) => user.id !== request.params.id)
    fs.writeFileSync(usersFilePath, JSON.stringify(filterUsersArray))

    const user = request.body
    user.id = request.params.id

    filterUsersArray.push(user)

    fs.writeFileSync(usersFilePath, JSON.stringify(filterUsersArray))
    response.send("OK")
})

// 5.
router.delete("/:id", (request, response) => {

    const fileContentAsABuffer = fs.readFileSync(usersFilePath)
    const usersArray = JSON.parse(fileContentAsABuffer.toString())

    const filterUsersArray = usersArray.filter((user) => user.id !== request.params.id)
    fs.writeFileSync(usersFilePath, JSON.stringify(filterUsersArray))

    response.send(filterUsersArray)
})

module.exports = router
