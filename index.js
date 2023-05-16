const express = require('express');
const bodyParse = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3001

app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())

app.get("/", (req, res) => {
    res.status(200).json("Welcome")
})

app.post("/user", (req, res) => {
    const userName = req.body.userName
    res.status(200).json(`Hi ${userName}`)
})

app.listen(PORT, () => {
    console.log(`Listen port ${PORT}`)
})