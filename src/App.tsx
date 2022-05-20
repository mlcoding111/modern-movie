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
  const [genre, setGenre] = React.useState<string>('action')
  const [type, setType] = React.useState<string>('movie')

  React.useEffect(()=>{
    MediaService.getGenre('movie', 'Horror').then((res : any) => {
      setData(res.data.results)
      console.log(res.data.results)
    })
  }, [])

  const handleGenreChange = (genreName : string) => {
    setGenre(genreName)
    MediaService.getGenre(type, genreName).then((res : any) => {
      setData(res.data.results)
    })
  }

  const handleTypeChange = (typeName: string) => {
    setType(typeName)
    MediaService.getGenre(typeName, genre).then((res : any) => {
      setData(res.data.results)
    })
  }


  return (
    <div className="App">
      <NavBar/>

      <Layout>
        <TypeSelector handleTypeChange={handleTypeChange}/>
        <GenreSelector handleGenreChange={handleGenreChange}/>
        <Container>
          {data && data.map((item, index) => (
             <Movie rating={item.vote_average}
                    title={item.title}
                    imgSrc={item.poster_path}
                    overview={item.overview}
              />
          ))}
        </Container>        
      </Layout>

    </div>
  );
}

export default App;
