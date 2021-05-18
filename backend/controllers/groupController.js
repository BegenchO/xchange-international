// @desc    Get all groups
// @route   GET /api/groups
// @access  Public
exports.getGroups = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Fetching all groups",
  });
};

// @desc    Create new group
// @route   POST /api/groups
// @access  Private
exports.createGroup = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Creating new group",
  });
};

// @desc    Get single group
// @route   GET /api/groups/:groupId
// @access  Public
exports.getGroup = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Fetching group with id ${req.params.groupId}`,
  });
};

// @desc    Update group
// @route   PUT /api/groups/:groupId
// @access  Private
exports.updateGroup = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Updating group with id ${req.params.groupId}`,
  });
};

// @desc    Join/leave group
// @route   PUT /api/groups/:groupId/join
// @access  Private
exports.joinGroup = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Joining/leaving group with id ${req.params.groupId}`,
  });
};
