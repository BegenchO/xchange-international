// @desc    Register new user
// @route   POST /api/users
// @access  Public
exports.registerUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Register new user" });
};

// @desc    Update user
// @route   PUT /api/users
// @access  Private
exports.updateUser = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Update user" });
};
