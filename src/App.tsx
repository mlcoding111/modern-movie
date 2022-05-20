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
  const [genre, setGenre] = React.useState<string>()

  React.useEffect(()=>{
    MediaService.getGenre().then((res : any) => {
      setData(res.data.results)
      console.log(res.data.results)
    })
  }, [])

  const handleGenreChange = (genre: string) => {
    setGenre(genre);
  }


  return (
    <div className="App">
      <NavBar/>

      <Layout>
        <TypeSelector />
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
