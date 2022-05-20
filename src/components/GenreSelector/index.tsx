import React from 'react'
import { Button, Selector } from './styles'

import { genres } from '../../services/MediaService'

export const GenreSelector = () => {

  const handleClick = (e: any) => {
    const { id } = e.target;
  }

  return (
    <Selector>
      <ul>
        {genres && genres.map((element, index) => (
          <li><Button>{element.name}</Button></li>
        ))}
      </ul>
        {/* <input type="radio" name="plan" id="monthly" onClick={(e)=> handleClick(e)}/>
        <label htmlFor="monthly">Movies</label>
        <input type="radio" name="plan" id="quarterly" onClick={(e)=> handleClick(e)}/>
        <label htmlFor="quarterly">Series</label> */}
    </Selector>
  )
}
