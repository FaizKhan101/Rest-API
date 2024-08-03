const express = require("express")
const bodyPardser = require("body-parser")

const feedRoutes = require("./routes/feed")

const app = express()

// app.use(bodyPardser.urlencoded()) // x-www-form-urlencoded <form>
app.use(bodyPardser.json()) // application/json

app.use("/feed", feedRoutes)

app.listen(8080, () => console.log("Server start at port: 8080"))