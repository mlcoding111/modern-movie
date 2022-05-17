import React, { FC } from 'react'
import { MovieCard } from './styles';
import { Container } from'../../styles/global'

// Interface to make props reliable on the test.tsx

interface Props{
    rating?: number,
    title?: string,
    imgSrc?: string
}

export const Movie:FC <Props> = ({rating, title, imgSrc}) => {
  return (
    <>
      <MovieCard>
        <img src="https://picsum.photos/1280/720" alt="image"/ >
          
        <div className="movie-info">
            <h3>Title</h3>
            <span className="green">9.8</span>
        </div>

        <div className="overview">
            <h3>Overview</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nisi est deserunt minus voluptatum fugiat sit recusandae ab eaque alias?
        </div>
      </MovieCard>
    </>
  )
}
