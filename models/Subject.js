const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters long"]
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: 500
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.export = mongoose.model("Subject", SubjectSchema);
