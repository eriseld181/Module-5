/*WHAT WE WOULD LIKE TO ACHIEVE?
1. GET ALL USERS DATA ON URL: localhost:3005/users GET
2. get single users data on url: localhost:3005/users/id GET
3. create single user record on ulr: localhost:3005/users POST
4. modify single users data on url: localhost:3005/users/id: PUT
5. delete single users data on url: localhost:3005/users/id: DELETE*/
const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")
const router = express.Router()//ne router do fusim tere endpoints dhe do i eksportojme

const usersFilePath = path.join(__dirname, "users.json")//vendose jasht qe te behet per tera routing
//route 1
router.get("/", (request, response) => {

    //a. retrieve user list from a file on disk(we dont have db yet)
    const fileContentAsBuffer = fs.readFileSync(usersFilePath)

    const fileContent = fileContentAsBuffer.toString();
    //console.log(fileContent)//kontrollo nese eshte kthyer vlera 

    //b. send the list in a json in the response
    response.send(JSON.parse(fileContent))
})

//route 2
router.get("/:id", (request, response) => {
    // retrieve a single user data from a file on disk(we dont have db yet) and send t back

    //a. read a file on disk and get back an array of users
    const fileContentAsBuffer = fs.readFileSync(usersFilePath)
    const userArray = JSON.parse(fileContentAsBuffer.toString())
    console.log(userArray)

    //b. filter out the array to retreive the specified user(we will use id)
    console.log("ID: ", request.params.id)// params ben te mundur aksesimin tek url ne fund per te marr id
    const user = userArray.filter((user) => user.id === parseInt(request.params.id))

    //send the user back into response
    response.send(user)
})

//route 3
router.post("/", (request, response) => {
    console.log(request.body)
    const newUser = { id: uniqid(), ...request.body }
    //1. read the cntent of the file and get back an array
    const fileContentAsBuffer = fs.readFileSync(usersFilePath)
    const userArray = JSON.parse(fileContentAsBuffer.toString())

    //2. add the new user to the array
    userArray.push(newUser)

    //3. writing the new content into the same array
    fs.writeFileSync()
    //4. response with status 201 ===created
    response.send(request.body)
})

//route 4
router.put("/id:", (request, response) => { })

//route 5
router.put("/id:", (request, response) => { })

module.exports = router