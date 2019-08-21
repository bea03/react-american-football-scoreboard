//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
//import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);  //the scores will start with 0
  
  const handleReset = e => {
    e.preventDefault(); //see lastweeks lesson about preventdefault
    setScoreHome(0);
    setScoreAway(0);
  };

  const handleScore = (team, score) => {
    if (team === "Home" && score === 10) {
      setScoreHome(scoreHome + 10);
    } else if (team === "Home" && score === 150) {
      setScoreHome(scoreHome + 150);
    } else if (team === "Away" && score === 10) {
      setScoreAway(scoreAway + 10);
    } else {
      setScoreAway(scoreAway + 150);
    }
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Slytherin</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoreHome}</div>  {/*add the variables from step two, the second part is the function created*/}
          </div>
          <div className="timer">Hogwarts Quidditch Cup</div>
          <div className="away">
            <h2 className="away__name">Ravenclaw</h2>
            <div className="away__score">{scoreAway}</div>
          </div>
        </div>
        
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/*<button onClick={() => setScoreHome(scoreHome + 10)} className="homeButtons__touchdown">Goal</button>
          <button onClick={() => setScoreHome(scoreHome + 150)} className="homeButtons__fieldGoal">Golden Snitch</button> {/*the setScore* is created here*/}
          <button onClick={() => handleScore('Home', 10)} className="homeButtons__touchdown">Goal</button>
          <button onClick={() => handleScore('Home', 150)} className="homeButtons__fieldGoal">Golden Snitch</button>
        </div>
        <div className="awayButtons">
          {/*<button onClick={() => setScoreAway(scoreAway + 10)} className="awayButtons__touchdown">Goal</button>
          <button onClick={() => setScoreAway(scoreAway + 150)} className="awayButtons__fieldGoal">Golden Snitch</button>*/}
          <button onClick={() => handleScore('Away', 10)} className="awayButtons__touchdown">Goal</button>
          <button onClick={() => handleScore('Away', 150)} className="awayButtons__fieldGoal">Golden Snitch</button>
        </div>
        <button onClick={handleReset} className="resetButton">Reset</button>
      </section>
    </div>
  );
}

export default App;
