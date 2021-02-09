import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Planets from './components/Planets'
import RandomPlanet from './components/RandomPlanet'
import PlanetDetail from './components/PlanetDetail'
import {fetchPlanets, fetchRandomPlanet} from './services/data'
import {useState, useEffect} from 'react'

function App() {
  const [planets, setPlanets] = useState([])
  const [randomPlanet, setRandomPlanet] = useState([])

  const getPlanets = async () => {
    const planetRes = await fetchPlanets();
    setPlanets(planetRes.planets);
  }

  const getRandomPlanet = async () => {
    const randomRes = await fetchRandomPlanet();
    setRandomPlanet(randomRes.data.planet)
  }
  
  useEffect(() => {
    getRandomPlanet()
  }, [])

  useEffect(() => {
    getPlanets()
  }, [])
  
  return (
    <div>
      <div>
        <nav>
            <NavLink to="/">Home</NavLink>
        </nav>
      </div>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/planets"><Planets planets={planets}/></Route>
          <Route path="/planets/random"><RandomPlanet planet={randomPlanet}/></Route>
          <Route path="/planets/:id" component={PlanetDetail} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
