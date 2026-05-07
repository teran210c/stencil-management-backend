const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    console.log("Stencil backend running")
})

app.listen(8080, () => {
    console.log("Server running o port 8080")
})

const pool = require("./db")

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error(err)
    } else {
        console.log(res.rows)
    }
})