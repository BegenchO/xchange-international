// @desc    Create new profile
// @route   POST /api/profiles
// @access  Private
exports.createProfile = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Profile created" });
};

// @desc    Get all profiles
// @route   GET /api/profiles
// @access  Public
exports.getProfiles = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Fetched all profiles" });
};

// @desc    Get single profile
// @route   GET /api/profiles/:profileId
// @access  Public
exports.getProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get profile with id ${req.params.profileId}`,
  });
};

// @desc    Update profile
// @route   PUT /api/profiles/:profileId
// @access  Private
exports.updateProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Profile with id ${req.params.profileId} is updated`,
  });
};
