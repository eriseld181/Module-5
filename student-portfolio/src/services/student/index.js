const express = require("express")
const fs = require("fs")
const path = require("path")
const uniqid = require("uniqid")
const router = express.Router()

const readFile = (filename) => {
    const buffer = fs.readFileSync(path.join(__dirname, filename))
    return JSON.parse(buffer.toString())

}

router.get("/", (req, res) => {
    const studDB = readFile("student.json")
    if (res.query && req.query.name) {
        const filteredStudents = studDB.filter((student) => student.hasOwnProperty(name) && student.name === student.query.name)
        res.send(filteredStudents)
    }
    else { res.send(studDB) }
})
router.get("/:id", (req, res) => {
    const studDB = readFile("student.json")
    const retreiveSudent = studDB.filter((student) => student.ID === req.params.id)
    res.send(retreiveSudent)
})
router.post("/", (req, res) => {
    const studDB = readFile("student.json")
    const newStudent = { ...req.body, ID: uniqid(), DateCreation: new Date() }

    studDB.push(newStudent)
    fs.writeFileSync(path.join(__dirname, "student.json"), JSON.stringify(studDB))

    res.status(201).send(studDB)
})
router.put("/:id", (req, res) => {
    const studDB = readFile("student.json")
    const newDB = studDb.filter((student) => student.ID !== req.params.id)
    const modifiedStudent = { ...req.body, ID: req.params.id }
    newDB.push(studDB)
    fs.writeFileSync(path.join(__dirname, "student.json"), JSON.stringify(newDB))
    res.send(newDB)
})

router.delete("/:id", (req, res) => {
    const studDB = readFile("student.json")
    const newDB = studDb.filter((student) => student.ID !== req.params.id)
    fs.writeFileSync(path.join(__dirname, "student.json"), JSON.stringify(newDB))
    res.send(newDB)
})


module.exports = router