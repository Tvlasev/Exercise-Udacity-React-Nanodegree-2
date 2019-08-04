import React from 'react'
import MovieCard from "./MovieCard"

const CardList = ({profiles, users, movies}) => {
  return (
  	<div>
      <MovieCard movies={movies}/>
    </div>
  )
}

export default CardList