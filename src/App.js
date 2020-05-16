import React from 'react';
import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route  exact path='/' >
          <Photos/>
        </Route>
        <Route  path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
