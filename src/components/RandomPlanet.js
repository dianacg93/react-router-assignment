function RandomPlanet({planet}) {

  return (
    <div key={planet.id}>
      <h3>{planet.name}</h3>
      <p>Moons: {planet.num_moons}</p>
      <p>Color: {planet.color}</p>
    </div>
  )
}

export default RandomPlanet