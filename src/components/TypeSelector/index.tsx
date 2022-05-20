import React from 'react'
import { Indicator, Selector } from './styles'

export const TypeSelector = () => {

  const handleClick = (e: any) => {
    const { id } = e.target;
  }

  return (
    <Selector>
        <input type="radio" name="plan" id="monthly" onClick={(e)=> handleClick(e)}/>
        <label htmlFor="monthly">Movies</label>
        <input type="radio" name="plan" id="quarterly" onClick={(e)=> handleClick(e)}/>
        <label htmlFor="quarterly">Series</label>
        <Indicator className="indicator"/>
    </Selector>
  )
}
