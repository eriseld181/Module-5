const express = require("express")
const { response } = require("express")
const fs = require("fs")
const path = require("path")
const router = express.Router()
const uniqid = require("uniqid")

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
    //filtron studentsArray dhe shfaq vetem ato te dhena  qe jane te njejta me req.params.id

    res.send(singleStudent)
})
router.post("/", (req, res) => {
    const newStudent = { ...req.body, id: uniqid() }
    const fileContentAsBuffer = fs.readFileSync(studentPath)//lexon te dhenen e students.json
    const studentsArray = JSON.parse(fileContentAsBuffer.toString())

    studentsArray.push(newStudent)
    fs.writeFileSync(studentPath, JSON.stringify(studentsArray))
    res.status(201).send(req.body)
})

router.delete("/:id", (req, res) => {
    const fileContentAsBuffer = fs.readFileSync(studentPath)//lexon te dhenen e students.json
    const studentsArray = JSON.parse(fileContentAsBuffer.toString())

    const newListOfStudents = studentsArray.filter((student) => student.id !== req.params.id)

    fs.writeFileSync(studentPath, JSON.stringify(newListOfStudents))
    res.send(newListOfStudents)
})


router.put("/:id", (req, res) => {
    const fileContentAsBuffer = fs.readFileSync(studentPath)//lexon te dhenen e students.json
    const studentsArray = JSON.parse(fileContentAsBuffer.toString())

    const newListOfStudents = studentsArray.filter((student) => student.id !== req.params.id)

    const student = req.body
    student.id = req.params.id

    newListOfStudents.push(student)
    fs.writeFileSync(studentPath, JSON.stringify(newListOfStudents))
    res.send("ok")


})

module.exports = router