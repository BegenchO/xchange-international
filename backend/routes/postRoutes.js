const express = require("express");
const router = express.Router();

// Import controller methods
const {
  getPost,
  getPosts,
  likePost,
  createPost,
  updatePost,
  deletePost,
  getComments,
  createComment,
  deleteComment,
} = require("../controllers/postController");

router.route("/").get(getPosts).post(createPost);

router.route("/:postId").get(getPost).put(updatePost).delete(deletePost);

router.route("/:postId/like").put(likePost);

router.route("/:postId/comments").get(getComments).post(createComment);

router.route("/:postId/comments/:commentId").delete(deleteComment);

module.exports = router;
