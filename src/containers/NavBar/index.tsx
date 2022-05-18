import React, { FC } from 'react'
import { Navbar as Nav } from './styles'

type Props = {
    age?: number
}

const NavBar:FC <Props> = () => {
  return (
    <Nav>
        Navigation
    </Nav>
  )
}

export default NavBar