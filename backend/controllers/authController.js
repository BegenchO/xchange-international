// @desc    Login user
// @route   POST /api/auth
// @access  Private
exports.loginUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Logging in user",
  });
};
