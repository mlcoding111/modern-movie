import React, { FC } from 'react';
import NavBar from './containers/NavBar';

import { Movie } from './components/Movie';
import { Layout } from './containers/Layout';
import { Container } from'./styles/global'

import MediaService from './services/MediaService';

const App:FC = () => {

  const [data, setData] = React.useState<any[]>([])

  React.useEffect(()=>{
    MediaService.getGenre().then((res : any) => {
      setData(res.data.results)
      console.log(res.data.results)
    })
  }, [])


  return (
    <div className="App">
      <NavBar/>

      <Layout>
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
