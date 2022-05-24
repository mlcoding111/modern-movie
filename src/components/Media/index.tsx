import React, { FC } from 'react'
import { MovieCard } from './styles';
import { IMG_URL } from '../../utils/variables'

// Interface to make props reliable on the test.tsx

interface Props{
    rating?: number,
    title?: string,
    imgSrc?: string,
    overview?: string,
    id: number,
    type: string
}

export const Movie:FC <Props> = ({rating, title, imgSrc, overview, id, type}) => {
  return (
    <>
      <MovieCard onClick={()=>console.log('click')}>
        <img src={IMG_URL + imgSrc} alt="image"/ >
          
        <div className="movie-info">
            <h3>{title}</h3>
            <span className="green">{rating}</span>
        </div>

        <div className="overview">
            <h3>Overview</h3>
            {overview}
        </div>
      </MovieCard>
    </>
  )
}
