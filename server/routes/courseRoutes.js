const express = require('express');
const router = express.Router();

const Course = require('../models/Course');
const auth = require('../authMiddleware');

// GET ALL COURSES
router.get('/', async (req, res) => {

  try {

    const courses = await Course.find();

    res.json(courses);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

// ADD COURSE (PROTECTED)
router.post('/', auth, async (req, res) => {

  try {

    const course = new Course(req.body);

    await course.save();

    res.json(course);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;