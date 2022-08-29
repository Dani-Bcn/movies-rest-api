const router = require('express').Router();
const Movie = require('../models/Movie')


// @desc    Get all movies
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    if (!movies) {
      next(new ErrorResponse('No movies found', 404));
    }
    res.status(200).json({ data: movies })
  } catch (error) {
    next(error);
  }
  res.status(200).json({ response: 'hello' })
});

// @desc    Get single movie
// @route   GET /:id
// @access  Public
router.get('/:id', async (req, res, next) => {

});

// @desc    Create a movie
// @route   POST /
// @access  Public
router.post('/', async (req, res, next) => {

});

// @desc    Edit a movie
// @route   PUT /:id
// @access  Public
router.put('/:id', async (req, res, next) => {

});

// @desc    Delete a movie
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {

});

module.exports = router;
