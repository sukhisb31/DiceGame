
import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import PlayGame from './components/playgame/PlayGame';

function App() {
  const [startGame, setStartGame] = useState(false);

  const toggleGamePlay = () =>{
    setStartGame ((prev) => !prev)
  }

  return (
    <>
    
    {startGame ? <PlayGame/> : <Home toggle={toggleGamePlay}/>}
    
      
    </>
  );

}
export default App;
