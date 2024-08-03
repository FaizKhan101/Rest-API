const express = require("express")

const feedRoutes = require("./routes/feed")

const app = express()

app.use("/feed", feedRoutes)

app.listen(8080, () => console.log("Server start at port: 8080"))