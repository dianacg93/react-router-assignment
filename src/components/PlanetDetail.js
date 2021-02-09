function PlanetDetail(props) {

  const {...planet} = props.location.state.planet
  return (
    <div key={planet.id}>
      <h3>{planet.name}</h3>
      <p>Moons: {planet.num_moons}</p>
      <p>Color: {planet.color}</p>
    </div>
  )
}

export default PlanetDetail;