const epxress = require("express")

const feedController = require("../controllers/feed")

const router = epxress.Router()

// GET /feed/posts
router.get("/posts", feedController.getPosts)

module.exports = router