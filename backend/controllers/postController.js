// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
exports.getPosts = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Fetching all posts" });
};

// @desc    Create new post
// @route   POST /api/posts
// @access  Private
exports.createPost = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Creating new post" });
};

// @desc    Get single post
// @route   GET /api/posts/:postId
// @access  Public
exports.getPost = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Fetching post with id ${req.params.postId}` });
};

// @desc    Update post
// @route   PUT /api/posts/:postId
// @access  Private
exports.updatePost = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updating post with id ${req.params.postId}` });
};

// @desc    Delete post
// @route   DELETE /api/posts/:postId
// @access  Private
exports.deletePost = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Deleting post with id ${req.params.postId}` });
};

// @desc    Like/unlike a post
// @route   PUT /api/posts/:postId
// @access  Private
exports.likePost = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Liked/unliked post with id ${req.params.postId}`,
  });
};

// @desc    Create comment on a post
// @route   POST /api/posts/:postId/comments
// @access  Private
exports.createComment = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Create comment on post with id ${req.params.postId}`,
  });
};

// @desc    Get comments on a post
// @route   GET /api/posts/:postId/comments
// @access  Public
exports.getComments = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Fetching comments of post with id ${req.params.postId}`,
  });
};

// @desc    Delete comment on a post
// @route   DELETE /api/posts/:postId/comments/:commentId
// @access  Private
exports.deleteComment = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Deleting comment with id ${req.params.commentId}`,
  });
};
