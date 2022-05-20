import React, {FC} from 'react'
import { Button, Selector } from './styles'

import { genres } from '../../services/MediaService'

type Props = {
  handleGenreChange: (text: string) => void;
}

export const GenreSelector:FC <Props> = ({handleGenreChange}) => {

  const handleClick = (e: any) => {
    const { innerText } = e.target;

    genres.forEach(genre => {
      genre.name === innerText ? document.getElementById(innerText)?.classList.add("active") : document.getElementById(genre.name)?.classList.remove("active")
    })

    handleGenreChange(innerText);
  }


  return (
    <Selector>
      <ul>
        {genres && genres.map((element, index) => (
          <li><Button onClick={handleClick} id={`${element.name}`} >{element.name}</Button></li>
        ))}
      </ul>
    </Selector>
  )
}
