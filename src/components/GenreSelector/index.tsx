import React, {FC} from 'react'
import { Button, Selector } from './styles'

import { genres } from '../../services/MediaService'
import { serieGenres } from '../../services/MediaService'

type Props = {
  handleGenreChange: (genre: string) => void;
}

export const GenreSelector:FC <Props> = ({handleGenreChange}) => {

  const handleClick = (e: any) => {
    const { innerText } = e.target;

    genres.forEach(genre => {
      genre.name === innerText ? document.getElementById(innerText)?.classList.add("active") : document.getElementById(genre.name)?.classList.remove("active")
    })
    console.log(innerText)
    handleGenreChange(innerText);
  }

  return (
    <Selector>
      <ul>
        {genres && genres.map((element, index) => (
          <li key={index}><Button onClick={handleClick} id={`${element.name}`} >{element.name}</Button></li>
        ))}
      </ul>
    </Selector>
  )
}
