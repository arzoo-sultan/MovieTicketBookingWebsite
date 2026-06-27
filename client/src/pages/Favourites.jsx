import React from 'react'
import { dummyShowsData } from '../assets/assets' // Swap this out for your live API state later!
import MovieCard from '../components/MovieCard'
import BlurCircle from '../components/BlurCircle'

const Favourites = () => {
  return (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[88vh]'>
      <BlurCircle top="150px" left="0px"/>
      <BlurCircle bottom="50px" right="50px"/>
      
      <h1 className='text-lg font-medium my-4'>Favourites</h1>
      
      {dummyShowsData.length > 0 ? (
        <div className='flex flex-wrap max-sm:justify-center gap-8'>
          {dummyShowsData.map((movie) => (
            <MovieCard movie={movie} key={movie._id}/>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center py-20'>
          <p className='text-gray-400 text-sm'>You haven't added any movies to your favourites yet.</p>
        </div>
      )}
    </div>
  )
}

export default Favourites