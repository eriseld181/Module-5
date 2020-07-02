const express = require("express")
const { response } = require("express")
const fs = require("fs")
const path = require("path")
const router = express.Router()

const studentPath = path.join(__dirname, "students.json")//krijon rrugen per tek students.json

//merr tere studentet
router.get("/", (req, res) => {
    //console.log("get")
    const fileContentAsBuffer = fs.readFileSync(studentPath)//lexon te dhenen e students.json
    const fileContent = JSON.parse(fileContentAsBuffer.toString())
    res.send(fileContent)
})

//merr vetem studentet me ane te ID
router.get("/:id", (req, res) => {
    const fileContentAsBuffer = fs.readFileSync(studentPath)//lexon te dhenen e students.json
    const studentsArray = JSON.parse(fileContentAsBuffer.toString())
    const singleStudent = studentsArray.filter((student) => student.id === req.params.id)
    res.send(singleStudent)
})
router.post("/", (req, res) => {
    console.log("post")
})
router.put("/:id", (req, res) => {
    console.log("put")
})
router.delete("/:id", (req, res) => {
    console.log("delete")
})


module.exports = router