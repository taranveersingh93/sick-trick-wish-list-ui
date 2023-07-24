import './NewTrick.css'

const NewTrick = ({selectValue, handleSelect}) => {
  return (
    (
      <form className="new-trick">
        <select value={selectValue} onChange={(e) => handleSelect(e)}>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>
      </form>
    )
  )
}

export default NewTrick;