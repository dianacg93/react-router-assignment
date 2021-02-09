import {Link} from 'react-router-dom';

function Planets({planets}) {

  return (
    <ul>
      {planets.map((el) => {
        return <li key={el.id}><Link to={
          {pathname: `/planets/${el.id}`,
          state: {planet: el}
          }}>{el.name}</Link></li>
      })}
    </ul>
  )
}

export default Planets;