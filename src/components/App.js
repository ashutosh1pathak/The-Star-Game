import React, { useState, useEffect } from 'react';
import utils from "./math.utils";
import StarsDisplay from "./stardisplay";
import PlayNumber from "./playnumber";
import PlayAgain from "./playagain";

export function App() {
  // STAR MATCH - V2

  const Game = (props) => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [avail, setavail] = useState(utils.range(1, 9));
    const [sec, setsec] = useState(10);
    const [candidate, setcandidate] = useState([])
    useEffect(() => {
      if (sec > 0 && avail.length > 0) {
        const timerID = setTimeout(() => {
          setsec(sec - 1);
        }, 1000);
        return () => clearTimeout(timerID)
      }
    });
    const candidatesums = utils.sum(candidate) < stars;
    const OnNumberClick = (currstatus, number) => {
      console.log(currstatus);
      if (currstatus == "used" || gamestatus !== 'active') {
        return;
      }
      var newcandidatesum = [];
      if (currstatus == 'available') {
        newcandidatesum = candidate.concat(number);
      }
      else {
        newcandidatesum = candidate.filter(cn => cn !== number);
        console.log('comes');
      }

      if (utils.sum(newcandidatesum) !== stars) {
        setcandidate(newcandidatesum);
        console.log(newcandidatesum);
      }
      else {
        const newavilablesum = avail.filter(
          n => !newcandidatesum.includes(n)
        );
        setStars(utils.randomSumIn(newavilablesum, 9));
        setavail(newavilablesum);
        setcandidate([])
      }
    };

    const OnButtonClick = (a) => {
      if (!avail.includes(a)) {
        return 'used';
      }
      if (candidate.includes(a)) {
        return candidatesums ? 'candidate' : 'wrong';
      }
      return 'available';
    };
    const gameisdone = avail.length == 0;
    const gamestatus = avail.length == 0 ? 'won' : sec == 0 ? 'lost' : 'active';
    console.log('num' + gameisdone);
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
      </div>
        <div className="body">
          <div className="left">
            {gamestatus !== 'active' ? <PlayAgain clicked={props.startnewgame} stats={gamestatus} /> : <StarsDisplay count={stars} />}
          </div>
          <div className="right">
            {utils.range(1, 9).map(number =>
              <PlayNumber status={OnButtonClick(number)} number={number} clicked={OnNumberClick} />

            )}
          </div>
        </div>
        <div className="timer">Time Remaining: {sec}</div>
      </div>
    );
  };
  const StarMatch = (props) => {
    const [game, id] = useState(1);
    return (
      <Game key={game} startnewgame={() => { id(game + 1) }} />
    );
  }

  // Color Theme





  return (
    <StarMatch />

  );
}
