const express = require("express")

const app = express()

const bookRouter = require("./src/routes/book")

app.get("/hello", async (req, res) => {
    //req will have al the information about the request!
    console.log("something is happening!")
    res.status(200).send("hello world")
})

app.use("/books", bookRouter)

app.listen(4000, () => console.log("hey im the server in the port 4000"))