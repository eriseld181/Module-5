const express = require("express")
const fs = require("fs")

const bookRouter = express.Router()
bookRouter.get("/", (req, res) => {
    const bookBuffer = fs.readFileSync("book.json")

    const bookString = bookBuffer.toString()
    const books = JSON.parse(bookString)
    console.log(bookString)
    res.send(books)
})

bookRouter.post("/", (req, res) => {
    res.send("POST")
})
bookRouter.put("/", (req, res) => {
    res.send("PUT")
})
bookRouter.delete("/", (req, res) => {
    res.send("DELETE")
})

module.exports = bookRouter;