import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import {
  HeartIcon,
  PlayCircleIcon,
  StarIcon
} from 'lucide-react'
import timeFormat from '../lib/TimeFormat'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [show, setShow] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    const found = dummyShowsData.find(
      (movie) => String(movie._id) === String(id)
    )

    if (found) {
      setShow({
        movie: found,
        dateTime: dummyDateTimeData
      })
      setNotFound(false)
    } else {
      setShow(null)
      setNotFound(true)
    }
  }, [id])

  // 404 Page
  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div><Loading/></div>
        
        <h1 className="text-6xl font-bold text-primary">404</h1>

        <h2 className="text-2xl font-semibold mt-3">
          Movie Not Found
        </h2>

        <p className="text-gray-400 mt-2 max-w-md">
          The movie you're looking for doesn't exist or may
          have been removed.
        </p>

        <button
          onClick={() => navigate('/movies')}
          className="mt-6 px-8 py-3 bg-primary hover:bg-primary-dull rounded-lg font-medium transition"
        >
          Browse Movies
        </button>
      </div>
    )
  }

  // Loading
  if (!show) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  )
}

  const movie = show.movie

  return (
    <div className="pt-30 md:pt-40 pb-20">

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Movie Details */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Poster */}
          <img
            src={movie.poster_path}
            alt={movie.title}
            className="max-md:mx-auto rounded-xl h-[420px] w-[280px] object-cover"
          />

          {/* Content */}
          <div className="relative flex flex-col gap-4">

            <BlurCircle
              top="-100px"
              left="-100px"
            />

            <p className="text-primary uppercase tracking-wide">
              English
            </p>

            <h1 className="text-4xl font-bold max-w-xl">
              {movie.title}
            </h1>

            <div className="flex items-center gap-2 text-gray-300">
              <StarIcon
                className="w-5 h-5 fill-primary text-primary"
              />
              <span>
                {movie.vote_average?.toFixed(1)} User Rating
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-2xl">
              {movie.overview}
            </p>

            <p className="text-gray-300">
              {timeFormat(movie.runtime)} •{' '}
              {movie.genres?.map(
                (genre) => genre.name
              ).join(', ')}{' '}
              •{' '}
              {movie.release_date?.split('-')[0]}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">

              <button className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-700 rounded-md transition">
                <PlayCircleIcon className="w-5 h-5" />
                Watch Trailer
              </button>

              <a
                href="#dateSelect"
                className="px-8 py-3 text-sm bg-primary hover:bg-primary-dull rounded-md transition font-medium"
              >
                Buy Tickets
              </a>

              <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition">
                <HeartIcon className="w-5 h-5" />
              </button>

            </div>
          </div>
        </div>

        {/* Cast Header */}
        <h2 className="text-xl font-semibold mt-20">
          Your Favourite Cast
        </h2>
      </div>

      {/* Cast Carousel */}
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex gap-5 w-max px-6 md:px-10 lg:px-16">

          {movie.casts?.slice(0, 12).map((cast, index) => (
            <div
              key={cast.id || cast.name || index}
              className="flex flex-col items-center text-center flex-shrink-0"
            >
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              <p className="text-sm font-medium mt-3 max-w-[90px]">
                {cast.name}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        <DateSelect
          dateTime={show.dateTime}
          id={id}
        />

        <h2 className="text-xl font-semibold mt-20 mb-8">
          You May Also Like
        </h2>

        <div className="flex flex-wrap gap-8 max-sm:justify-center">
          {dummyShowsData
            .filter((item) => item._id !== movie._id)
            .slice(0, 4)
            .map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
              />
            ))}
        </div>

        <div className="flex justify-center mt-20">
          <button
            onClick={() => {
              navigate('/movies')
              window.scrollTo(0, 0)
            }}
            className="px-10 py-3 bg-primary hover:bg-primary-dull rounded-md font-medium transition"
          >
            Show More
          </button>
        </div>

      </div>
    </div>
  )
}

export default MovieDetails