const epxress = require("express")

const feedController = require("../controllers/feed")

const router = epxress.Router()

// GET /feed/posts
router.get("/posts", feedController.getPosts)

// POST /feed/post
router.post("/post", feedController.createPost)

module.exports = router