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
});

// @desc    Get single movie
// @route   GET /:id
// @access  Public
router.get('/:id', async (req, res, next) => {

  const { id } = req.params

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      next(new ErrorResponse('No movie found', 404));
    }
    res.status(200).json({ data: movie })
  } catch (error) {
    next(error);
  }

});

// @desc    Create a movie
// @route   POST /
// @access  Public
router.post('/', async (req, res, next) => {
  try {
    const movie = await Movie.create(req.body);
     res.status(201).json({ data: movie })
    }   
  catch (error) {
    next(error);
  }

});

// @desc    Edit a movie
// @route   PUT /:id
// @access  Public
router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  const {
    title,
    year,
    duration,
    synopsis,
    diretor,
    image
  }= req.body

  try {
    const movie = await Movie.findById(id);
    if (!movie) {
     res.status(404).json({ response: "Not found"});
    }
    const updateMovie = await Movie.findByIdAndUpdate(id, req.body,{new:true});
    res.status(202).json({ data: updateMovie })
  } catch (error) {
    next(error);
  }

});

// @desc    Delete a movie
// @route   DELETE /:id
// @access  Public
router.delete('/:id', async (req, res, next) => {

  const { id } = req.params

  try {
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      next(new ErrorResponse('No movie found', 404));
    }
    res.status(200).json({ response :"Delete movie ok"})
  } catch (error) {
    next(error);
  }

});

module.exports = router;
