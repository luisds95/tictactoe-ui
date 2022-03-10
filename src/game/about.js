import React from 'react';
import ExhaustiveSearchExample from '../assets/ExhaustiveSearch.png';
import BoardValuesExample from '../assets/BoardValues.png';


function About() {
  return (
    <div className='about'>
      <h1>How does it work?</h1>
      <p>A reinforcement learning agent is a computer program that can learn, on its own, a strategy to achieve an objective. In this case, the objective is to win at TicTacToe, and the strategy the agent learnt is the optimal action to take at any possible board configuration.</p>
      <p>The simplest way of learning such an strategy is to play out every possibility and come up with the result. Then, one can retrospectively examine the outcome of each action and find the best action. This is of course, prohibitedly expensive in most scenarios, but TicTacToe is a small enough game for this strategy to work. In principle, one would think there are 9!=362880 possible boards, but because the game finished as soon as one player has 3 marks in line, there are only 4531 possible boards.</p>
      <img id='img-exhaustive-search-example' src={ExhaustiveSearchExample} alt='Example of Exhaustive Search in TicTacToe' />
      <p>To find these boards, the agent plays every possible position until the game finishes, and the scores each move based on whether the outcome led it to win, draw or lose. The example below illustrates this process. In both boards, the player with mark X would win by playing in green squares, draw in gray and lose in red.</p>
      <img id='img-board-value-example' src={BoardValuesExample} alt='Example of board values' />
      <p>During game time, the engine will simply lookup these pre-computed values and choose the best possible action if there is one available</p>
    </div>
  );
}

export default About;
