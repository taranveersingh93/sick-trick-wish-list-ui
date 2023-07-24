const TrickCard = ({stance, name, obstacle, tutorial, id}) => {
  return (
  <div className="trick-card" id={id}>
    <p>{stance}{" "}{name}</p>
    <p>Obstacle: {obstacle}</p>
    <p>Link to tutorial:</p>
    <a href={tutorial}>{tutorial}</a>
  </div>
  )
}

export default TrickCard