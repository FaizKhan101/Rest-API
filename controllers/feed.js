exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First post", content: "This is my first post." }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  res.status(201).json({
    message: "Create post successfully.",
    post: { id: Math.random(), title: title, content: content },
  });
};

 