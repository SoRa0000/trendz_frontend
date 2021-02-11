import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import {Navbar} from './components'
import GlobalStyles from './GlobalStyles'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route to='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
