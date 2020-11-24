import React from 'react'
import HomePage from '../components/HomePage/HomePage'
import PokeDetailsPage from '../components/PokeDetailsPage'
import PokedexPage from '../components/PokedexPage'
import ErrorPage from '../components/ErrorPage'
import { BrowserRouter, Route, Switch } from "react-router-dom"

function Router() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/">
        <HomePage/>
      </Route>

      <Route exact path="/pokeDetails/:id">
        <PokeDetailsPage/>
      </Route>

      <Route exact path="/pokedexPage">
        <PokedexPage/>
      </Route>

      <Route path= "/errorPage">
        <ErrorPage/>
      </Route>

    </Switch >
  </BrowserRouter>
  

  );
}

export default Router;
