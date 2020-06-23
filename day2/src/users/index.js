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

const router = express.Router()

// 1.
router.get("/", (request, response) => {
    // (request, response)=> is the handler for this specific route

    // a) retrieve users list from a file on disk (we do not have a real database yet!)

    const usersFilePath = path.join(__dirname, "users.json") // we composed the path on disk (avoid __dirname + "\\users.json")
    const fileContentAsABuffer = fs.readFileSync(usersFilePath) // please read the file (we are getting a Buffer back)
    console.log(fileContentAsABuffer)
    const fileContent = fileContentAsABuffer.toString() // we need to translate the buffer into something human readable

    // b) send the list as a json in the response body
    response.send(JSON.parse(fileContent)) // JSON.parse converts strings into json format
})

// 2.
router.get("/:id", (request, response) => { })

// 3.
router.post("/", (request, response) => { })

// 4.
router.put("/:id", (request, response) => { })

// 5.
router.delete("/:id", (request, response) => { })

module.exports = router
