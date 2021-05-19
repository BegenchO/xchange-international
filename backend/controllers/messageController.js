// @desc    Get all correspondence
// @route   GET /api/messages
// @access  Private
exports.getMessages = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Fetching all correspondence",
  });
};

// @desc    Get single user correspondence
// @route   GET /api/messages/:userId
// @access  Private
exports.getMessage = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Fetching correspondence with user with id ${req.params.userId}`,
  });
};

// @desc    Send message
// @route   POST /api/messages/:userId
// @access  Private
exports.sendMessage = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Sending message to user with id ${req.params.userId}`,
  });
};
