import './App.css';
import React, { useEffect, useState } from 'react';
import AllTricks from '../AllTricks/AllTricks';
import NewTrick from '../NewTrick/NewTrick';

function App() {
  const [tricks, setTricks] = useState([]);
  const [selectValue, setSelectValue] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then((data) => {setTricks(data)})
  }, [])

  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <NewTrick selectValue={selectValue} handleSelect={handleSelect}/>
      <AllTricks tricks={tricks}/>
    </div>
  );
}

export default App; 
