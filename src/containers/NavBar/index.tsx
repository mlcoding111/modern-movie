import React, { FC } from 'react'
import { Navbar as Nav } from './styles'
import SearchBar from '../../components/SearchBar'
import arrow from '../../assets/arrow.svg'
import {useNavigate, useLocation} from 'react-router-dom'

type Props = {
    age?: number
}

const NavBar:FC <Props> = () => {
  let navigate = useNavigate();
  let location = useLocation();



  React.useEffect(()=>{
    handleArrowRender()
  }, [location])

  const handleArrowRender = () => {
    if(location.pathname === "/"){
      return null
    }else{
      return (<img src={arrow} onClick={() => handleClick()} id="nav-arrow"/>)
    }
  }


  const handleClick = () => {
    navigate("/")
  } 
  
  return (
    <Nav>
        {/* {handleArrowRender()} */}
        <img src={arrow} onClick={() => handleClick()} id="nav-arrow" className={`${location.pathname === "/" ? "hidden" : "show"}`}/>
        <SearchBar/>
    </Nav>
  )
}

export default NavBar