import React, { FC } from 'react';
import NavBar from './containers/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './containers/Home'
import { MediaDetails } from './components/MediaDetails';
import { Layout } from './containers/Layout';

const App:FC = () => {

  return (
    <div className="App">

      <Layout>
        <NavBar/>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="media" >
                <Route path=":id" element={<MediaDetails />} />                
              </Route>
              
            </Routes>
          </BrowserRouter>
          
      </Layout>

    </div>
  );
}

export default App;
