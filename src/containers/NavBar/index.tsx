import React, { FC } from 'react'
import { Navbar as Nav } from './styles'
import SearchBar from '../../components/SearchBar'
type Props = {
    age?: number
}

const NavBar:FC <Props> = () => {
  return (
    <Nav>
        <SearchBar/>
    </Nav>
  )
}

export default NavBar