import React from 'react'

const MovieCard = ({movies}) => {
  const movieValues = Object.values(movies)
  const movie = movieValues.map(movie => {
    return (
      <li key={movie.id}>
        <h4>{movie.name}</h4>
	    <p>Liked By:</p>
	  </li>
    ) 
  })
  return (
    <div>
      <ul> 	
	  {movie}
      </ul>
    </div>
  )
}

export default MovieCard