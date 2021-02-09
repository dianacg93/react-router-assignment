import { Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/planets">Planets</Link>
        <Link to="/planets/random">Random Planet</Link>
    </div>
  )
}

export default Home;