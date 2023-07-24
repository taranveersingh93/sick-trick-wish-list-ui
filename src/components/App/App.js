import './App.css';
import React, { useEffect, useState } from 'react';
import AllTricks from '../AllTricks/AllTricks';
import NewTrick from '../NewTrick/NewTrick';

function App() {
  const [tricks, setTricks] = useState([]);
  const [stance, setStance] = useState('');
  const [trick, setTrick] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorial] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(response => response.json())
      .then((data) => {setTricks(data)})
  }, [])

  const handleStance = (e) => {
    setStance(e.target.value);
  }

  const handleTrick = (e) => {
    setTrick(e.target.value)
  }

  const handleObstacle = (e) => {
    setObstacle(e.target.value)
  }

  const handleTutorial = (e) => {
    setTutorial(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTrick = {
      stance: stance,
      name: trick,
      obstacle: obstacle,
      tutorial: tutorial,
      id: (tricks.length+1).toString()
    }
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <NewTrick 
        stance={stance}
        handleStance={handleStance}
        trick={trick} 
        handleTrick={handleTrick}
        obstacle={obstacle}
        handleObstacle={handleObstacle}
        tutorial={tutorial}
        handleTutorial={handleTutorial}
        handleSubmit={handleSubmit}
      />
      <AllTricks tricks={tricks}/>
    </div>
  );
}

export default App; 
