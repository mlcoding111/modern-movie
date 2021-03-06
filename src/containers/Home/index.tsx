import React, { FC } from 'react'

import { Movie } from '../../components/Media';
import { Layout } from '../../containers/Layout';
import { LoadMore } from '../../components/LoadMore';
import { Container } from'../../styles/global'

import { useGlobalContext } from '../../global/MyGlobalContext'
import { motion } from 'framer-motion'

import MediaService from '../../services/MediaService';
import { TypeSelector } from '../../components/TypeSelector';
import { GenreSelector } from '../../components/GenreSelector';
import { useLocation } from 'react-router-dom';

const Home:FC = () => {
    let location = useLocation();
    const {data, setData} = useGlobalContext();

    const [type, setType] = React.useState<string>('movie')
    const [pageCount, setPageCount] = React.useState<number>(1)

    const [genre, setGenre] = React.useState<string>('Popular')
    const [genresList, setGenresList] = React.useState<{id: number, name: string}[]>([])
  
    // Fetch the genres list for a given type : "Tv" or "Movie"
    async function fetchGenres(type : string){
      const list = await MediaService.getGenresList(type)
      setGenresList(list)
    }
  
    // Initialize default data
    React.useEffect(()=>{
      fetchGenres(type)
      MediaService.getPopular(type).then((res : any) => {
        setData(res.data.results)
      })
      setPageCount(pageCount + 1)
    }, [])

    React.useEffect(()=>{
      window.scroll(0, 0);
    }, [location])
  
    // Fetch the api for the genre selected by the user and update the data
    const handleGenreChange = async (genreName : string) => {
      setPageCount(2) // Reset page count
      setGenre(genreName)
      fetchGenres(type)
      MediaService.getGenre(type, genreName, genresList).then((res : any) => {
        setData(res.data.results)
      })
    }
  
    // Fetch the api for the type selected by the user and update the data
    const handleTypeChange = (typeName: string) => {
      setGenre("Popular")
      setPageCount(2) // Reset page count
      setType(typeName)
      fetchGenres(typeName)
      MediaService.getPopular(typeName).then((res : any) => {
        setData(res.data.results)
      })
      genresList.forEach(genre => {
        document.getElementById(genre.name)?.classList.remove('active')
        // genre.name === innerText ? document.getElementById(innerText)?.classList.add("active") : document.getElementById(genre.name)?.classList.remove("active")
      })
      console.log('clicked')
  
    }

    const loadMore = () => {
      setPageCount(pageCount + 1) // Increment pageCount
      // If no genre is selected, fetch popular medias..
      if(genre === "Popular"){
        MediaService.getPopular(type, pageCount).then((res : any) => {
          let newArr = [...data];
          let response = res.data.results
          response.forEach((media: any) => {
            newArr.push(media)
          })
          console.log(response)
          setData(newArr)
        })
      }else{
        // If there is a selected genre, fetch additionnal pages for that genre..
        MediaService.getGenre(type, genre, genresList, pageCount).then((res : any) => {
          let newArr = [...data];
          let response = res.data.results
          response.forEach((media: any) => {
            newArr.push(media)
          })
          setData(newArr)
        })
      }

    }
  
  return (
      <>
        <TypeSelector handleTypeChange={handleTypeChange}/>
        <GenreSelector handleGenreChange={handleGenreChange} genresList={genresList}/>
        <Container>
          {data && data.map((item, index) => (            
             <Movie rating={item.vote_average}
                    title={item.title || item.original_title || item.name}
                    imgSrc={item.poster_path}
                    overview={item.overview}
                    key={index}
                    id={item.id}
                    type={type}
              />                            
          ))}
          <LoadMore loadMore={loadMore}/>
          
        </Container>      
      </>

  )
}

export default Home