import React, {FC} from 'react'
import { Button, Selector } from './styles'
import { motion } from 'framer-motion'

type Props = {
  handleGenreChange: (genre: string) => void,
  genresList : {
    id: number,
    name: string
  }[]
}

export const GenreSelector:FC <Props> = ({handleGenreChange, genresList}) => {

  const handleClick = (e: any) => {
    const { innerText } = e.target;

    genresList.forEach(genre => {
      genre.name === innerText ? document.getElementById(innerText)?.classList.add("active") : document.getElementById(genre.name)?.classList.remove("active")
    })
    console.log(innerText)
    handleGenreChange(innerText);
  }

  return (
    <Selector>
      <ul className="genres-list">
        {genresList && genresList.map((element, index) => (
          <motion.div layout>
          <li key={index}><Button onClick={handleClick} id={`${element.name}`} >{element.name}</Button></li>
          </motion.div>
        ))}
      </ul>
    </Selector>
  )
}
