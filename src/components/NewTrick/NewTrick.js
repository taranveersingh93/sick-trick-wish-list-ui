import './NewTrick.css'

const NewTrick = ({stance, handleStance, trick, handleTrick, obstacle, handleObstacle, tutorial, handleTutorial, handleSubmit}) => {
  return (
    (
      <form className="new-trick">
        <select id="trick-select" value={stance} onChange={(e) => handleStance(e)}>
          <option value="placeholder">Choose your Stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
        <input type='text' value={trick} placeholder='Name of Trick' onChange={(e) => handleTrick(e)} />
        <select id='obstacle-select' value={obstacle} onChange={(e) => handleObstacle(e)}>
          <option value="placeholder">Choose your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select>
        <input type='text' value={tutorial} placeholder='Link to tutorial' onChange={(e) => handleTutorial(e)} />
        <button onClick={(e)=>handleSubmit(e)}>Send It!</button>
      </form>
    )
  )
}

export default NewTrick;