// gets all subjects
// route GET /api/v1/subjects
// access -- public
exports.getSubjects = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all subjects" });
};

// gets a single subject
// route GET /api/v1/subjects/:id
// access -- public
exports.getSubject = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get subject ${req.params.id}` });
};

// creates a single subject
// route POST /api/v1/subjects/:id
// access -- private
exports.createSubject = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new subject" });
};

// updates a single subject
// route PUT /api/v1/subjects/:id
// access -- private
exports.updateSubject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update subject ${req.params.id}` });
};
// deletes a single subject
// route DELETE /api/v1/subjects/:id
// access -- private
exports.deleteSubject = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete subject ${req.params.id}` });
};
