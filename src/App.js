import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import {Navbar, Footer} from './components'
import GlobalStyles from './GlobalStyles'
import Vote_Anime from './pages/Vote/VoteAnime/Vote_Anime'
import VoteList from './pages/Vote/VoteAnime/VoteList'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/vote/anime" exact component={Vote_Anime} />
        <Route path="/vote/anime/weekly" component={VoteList} />
        

        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
