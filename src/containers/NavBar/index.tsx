import React, { FC } from 'react'
import { Navbar as Nav } from './styles'
import SearchBar from '../../components/SearchBar'
import arrow from './arrow.svg'
import {useNavigate} from 'react-router-dom'

type Props = {
    age?: number
}

const NavBar:FC <Props> = () => {
   let navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  }
  return (
    <Nav>
        <img src={arrow} onClick={() => handleClick()}/>
        <SearchBar/>
    </Nav>
  )
}

export default NavBar