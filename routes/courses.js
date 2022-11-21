const ex = require("express");
const { route } = ex.Router();
const Course = require("../models/course");
const router = ex.Router();

//get courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.json(err);
  }
});

// get single courses
router.get("/:courseID", async (req, res) => {
  try {
    const courseId = req.params.courseID;
    const c = await Course.findById(courseId);
    res.json(c);
  } catch (err) {
    res.json(err);
  }
});

// creating a course

router.post("/", async (req, res) => {
  try {
    const c = await Course.create(req.body);
    res.json(c);
  } catch (err) {
    res.json(err);
  }
});

// delete a course

router.delete("/:courseID", async (req, res) => {
  try {
    await Course.remove({ _id: req.params.courseID });
    res.status(200).json({
      message: "done",
    });
  } catch (err) {
    res.json(err);
  }
});

// update a course

router.put("/:courseID", async (req, res) => {
  try {
    const courseId = req.params.courseID;
    const c = await Course.updateOne({ _id: courseId }, req.body);
    res.json(c);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
