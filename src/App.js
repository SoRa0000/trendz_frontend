import React, {useEffect }from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import {Navbar, Footer} from './components'
import GlobalStyles from './GlobalStyles'
import Vote_Anime from './pages/Vote/VoteAnime/Vote_Anime'
import VoteList from './pages/Vote/VoteAnime/VoteList'
import NewsList from './pages/NewsList/NewsList'
import News from './pages/NewsList/News'
import AnimeList from './pages/List/AnimeList'
import Anime from './pages/List/Anime'
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/vote/anime" exact component={Vote_Anime} />
        <Route path="/vote/anime/weekly" component={VoteList} />
        <Route path="/news" exact component={NewsList} />
        <Route path="/news/id" component={News} />
        <Route path="/list/anime" exact component={AnimeList} />
        <Route path="/list/anime/id" component={Anime} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
