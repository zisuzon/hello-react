import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces'
import MainNavigation from './shared/Navigation/MainNavigation'

const App = () => {
  return <Router>
    <MainNavigation></MainNavigation>
    <main>  
      <Switch>
        <Route path="/" exact>
          <Users></Users>
        </Route>
        
        <Route path="/:userId/places" exact>
          <UserPlaces></UserPlaces>
        </Route>

        <Route path="/places/new" exact>
          <NewPlace></NewPlace>
        </Route>

        <Redirect to="/"></Redirect>
      </Switch>
    </main>
  </Router>
}

export default App;
