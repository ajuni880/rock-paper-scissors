import React from 'react';
import styled from 'styled-components';
import { neutral, yellow } from '../../utils';
import { withGame } from '../../context/GameProvider';

const ScoreboarWrapper = styled.div`
  background: ${props => props.theme.primaryTextColor};
  color: ${props => props.theme.primaryColor};
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  width: 5rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius};

  .value {
    font-size: 2.3rem;
    color: ${neutral[500]};
    line-height: 1;
  }
`;

const ScoreWrapper = styled.div`
  display: flex;
`;

const Counter = styled.div`
  text-align: center;
  background: ${props => props.background || 'transparent'};
  color: ${props => props.color || 'inherit'};
`;

const Scoreboard = ({ game }) => {
  const { state: { players: { currentPlayer, computer }}} = game;
  return (
    <ScoreboarWrapper>
      <small>SCORE</small>
      <ScoreWrapper>
        <Counter background={yellow[100]} color={neutral[100]}>
          <h4>{currentPlayer.score}</h4>
          <small>YOU</small>
        </Counter>
        <Counter>
          <h4>{computer.score}</h4>
          <small>COM</small>
        </Counter>
      </ScoreWrapper>
    </ScoreboarWrapper>
  )
};

export default withGame(Scoreboard);
