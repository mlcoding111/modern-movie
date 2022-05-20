import React, {FC} from 'react'
import { Indicator, Selector } from './styles'


type Props = {
  handleTypeChange: (type: string, text?: string) => void;
}

export const TypeSelector:FC <Props> = ({handleTypeChange}) => {

  const handleClick = (e: any) => {
    const { id } = e.target;
    handleTypeChange(id);
  }
  return (
    <Selector>
        <input type="radio" name="plan" id="movie" onClick={(e)=> handleClick(e)}/>
        <label htmlFor="movie">Movies</label>
        <input type="radio" name="plan" id="tv" onClick={(e)=> handleClick(e)}/>
        <label htmlFor="tv">Series</label>
        <Indicator className="indicator"/>
    </Selector>
  )
}
