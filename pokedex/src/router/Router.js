import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import PokeDetailsPage from '../pages/PokeDetails/PokeDetailsPage'
import PokedexPage from '../pages/PokeDex/PokedexPage'
import ErrorPage from '../pages/ErrorPage'
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
