import React, { FC } from 'react';
import NavBar from './containers/NavBar';

import { Movie } from './components/Movie';
import { Layout } from './containers/Layout';
import { Container } from'./styles/global'

import MediaService from './services/MediaService';
import { TypeSelector } from './components/TypeSelector';
import { GenreSelector } from './components/GenreSelector';

const App:FC = () => {
  const [data, setData] = React.useState<any[]>([])
  const [genre, setGenre] = React.useState<string>('Action')
  const [type, setType] = React.useState<string>('movie')
  const [genresList, setGenresList] = React.useState<{id: number, name: string}[]>([])

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
  }, [])

  // Fetch the api for the genre selected by the user and update the data
  const handleGenreChange = async (genreName : string) => {
    setGenre(genreName)
    fetchGenres(type)
    MediaService.getGenre(type, genreName, genresList).then((res : any) => {
      setData(res.data.results)
    })
    // console.log(genresList)
  }

  // Fetch the api for the type selected by the user and update the data
  const handleTypeChange = (typeName: string) => {
    setType(typeName)
    MediaService.getPopular(type).then((res : any) => {
      setData(res.data.results)
    })
    genresList.forEach(genre => {
      console.log(genre)
      document.getElementById(genre.name)?.classList.remove('active')
      // genre.name === innerText ? document.getElementById(innerText)?.classList.add("active") : document.getElementById(genre.name)?.classList.remove("active")
    })
    fetchGenres(typeName)
  }


  return (
    <div className="App">
      <NavBar/>

      <Layout>
        <TypeSelector handleTypeChange={handleTypeChange}/>
        <GenreSelector handleGenreChange={handleGenreChange} genresList={genresList}/>
        <Container>
          {data && data.map((item, index) => (
             <Movie rating={item.vote_average}
                    title={item.title}
                    imgSrc={item.poster_path}
                    overview={item.overview}
                    key={index}
              />
          ))}
        </Container>        
      </Layout>

    </div>
  );
}

export default App;
