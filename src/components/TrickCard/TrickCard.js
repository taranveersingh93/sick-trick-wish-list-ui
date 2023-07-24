import './TrickCard.css'

const correctCase = (word) => {
  const letters = word.split("");
  const newLetters = [letters[0].toUpperCase(), ...letters.splice(1)]
  return (newLetters.join(""))
}

const TrickCard = ({stance, name, obstacle, tutorial, id}) => {
  return (
  <div className="trick-card" id={id}>
    <p>{correctCase(stance)}{" "}{correctCase(name)}</p>
    <p className='obstacle'>Obstacle: {correctCase(obstacle)}</p>
    <p>Link to tutorial:</p>
    <a className="tutorial"href={tutorial}>{tutorial}</a>
  </div>
  )
}

export default TrickCard