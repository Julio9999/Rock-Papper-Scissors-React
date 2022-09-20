import './App.scss';
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Modal } from "./components/Modal";
import { useState } from 'react';

const l = localStorage;

function App() {
  const [score, setScore] = useState(parseInt(l.getItem('score')) || 0);

	function handleScore(result){
	if(result === 'YOU WIN'){
		setScore(current => parseInt(current)+1)
		l.setItem('score', score+1)
	}else if(result === 'YOU LOSE'){
		if(score -1 <= 0){
			setScore(0)
			l.setItem('score', 0)
			return;
		}
		setScore(current => parseInt(current)-1)
		l.setItem('score', score-1)
	}
}



  return (
    <div className="App">
      <Header score={score} />
      <Options handleScore={handleScore} />
      <Modal />
    </div>
  );
}

export default App;
