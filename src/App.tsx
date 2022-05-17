import React, { FC } from 'react';
import { Colors } from './utils/variables';
import NavBar from './containers/NavBar';

import { Movie } from './components/Movie';
import { Layout } from './components/Layout';
import { Container } from'./styles/global'

const App:FC = () => {

  return (
    <div className="App">
      <NavBar/>

      <Layout>
        <Container>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
        </Container>        
      </Layout>

    </div>
  );
}

export default App;
