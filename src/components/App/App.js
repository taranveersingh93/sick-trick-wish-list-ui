import './App.css';
import React, { useEffect, useState } from 'react';
import AllTricks from '../AllTricks/AllTricks';


function App() {
  const [tricks, setTricks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then((data) => {setTricks(data)})
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <AllTricks tricks={tricks}/>
    </div>
  );
}

export default App; 
