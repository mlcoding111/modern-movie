import React, { FC } from 'react';
import NavBar from './containers/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './containers/Home'
import { MediaDetails } from './components/MediaDetails';
import { Layout } from './containers/Layout';
import { MyGlobalContext } from './global/MyGlobalContext';

const App:FC = () => {
  const [data, setData] = React.useState<Array<[]>>([])
  // const [type, setType] = React.useState<Array<[]>>([])
  return (
    <div className="App">
      <MyGlobalContext.Provider value={{data, setData}}>
      <Layout> 

          <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="media">
                <Route path=":type/:title/:id" element={<MediaDetails />} />                
              </Route>
              
            </Routes>
          </BrowserRouter>
          
      </Layout>
      </MyGlobalContext.Provider>

    </div>
  );
}

export default App;
