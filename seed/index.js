require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/Movie')

const movies = [
  {
    title:"TiburongTres",
    year:1825,
    director:"Luca Di Meo",
    duration:0.05,
    sypnosis:"I don´t know",
    image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2019/7/w300/4LHg8wEwh8TNwLuFcaEnxsVqpMT.jpg"

  },
  {
    title:"TiburongDos",
    year:1725,
    director:"Conan",
    duration:55,
    sypnosis:"I don´t know",
    image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2019/7/w300/4LHg8wEwh8TNwLuFcaEnxsVqpMT.jpg"

  },
  {
    title:"Tiburongseis",
    year:1825,
    director:"En lucas me meo",
    duration:125,
    sypnosis:"I",
    image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2019/7/w300/4LHg8wEwh8TNwLuFcaEnxsVqpMT.jpg"

  },
  {
    title:"TiburongunoOdos",
    year:1825,
    director:"Luca Di Meo",
    duration:5,
    sypnosis:"hay",
    image:"https://www.lavanguardia.com/peliculas-series/images/movie/poster/2019/7/w300/4LHg8wEwh8TNwLuFcaEnxsVqpMT.jpg"

  }

]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return  Movie.create(movies)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })