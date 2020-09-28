import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import { Plays, Container, PrimaryButton, MatchResult } from '../shared';
import { withGame } from '../../context/GameProvider';
import { EnumPlays, checkWinner, computeMathResult, EnumGameResultStates } from '../../lib';
import { playAgain, updateScore } from '../../hooks/useGame';

const PlaysWrapper = styled.div`
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 1fr;
  height: 19rem;
  padding: 2rem 0;
  position: relative;

  @media only screen and (max-width: ${props => props.theme.mqs.mobile}) {
    grid-template-columns: 0.5fr;
    grid-template-rows: 13rem 13rem;
    justify-content: center;
    height: auto;
  }

  img {
    width: 50%;
  }
`;

const PlayWithTranslate = styled.div`
  transition: transform .1s cubic-bezier(.12,.61,.42,.61);
  transform: ${props => props.translate ? `translateX(${props.translate})` : 'none'};

  @media only screen and (max-width: ${props => props.theme.mqs.mobile}) {
    transform: ${props => props.translate ? `translateY(${props.translate})` : 'none'};
  }
`;

function getSelectedPlay(p) {
  if (p.play === EnumPlays.paper) return Plays.Paper;
  else if (p.play === EnumPlays.scissors) return Plays.Scissors;
  else return Plays.Rock;
}


const Match = ({ game }) => {
  const { state: { players }, updateState } = game;
  const [matchResultVisible, setMatchResultVisible] = useState(false);
  const props = { borderWidth: 32, bottomShadow: '-2.6rem', innerShadow: '10px'};
  const PlayerPlay = getSelectedPlay(players.currentPlayer)
  const ComputerPlay = getSelectedPlay(players.computer)
  const winner = checkWinner(players.currentPlayer, players.computer);
  const result = computeMathResult(winner);

  const handlePlayAgain = () => {
    updateState(playAgain());
  }

  useEffect(() => {
    setMatchResultVisible(true);
    if (winner !== EnumGameResultStates.draw) updateState(updateScore(winner));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <PlaysWrapper>
        <PlayWithTranslate translate={matchResultVisible ? '-20%' : ''}>
          <PlayerPlay {...props} />
        </PlayWithTranslate>
        <PlayWithTranslate translate={matchResultVisible ? '20%' : ''}>
          <ComputerPlay {...props} />
        </PlayWithTranslate>

        {
          matchResultVisible && (
            <MatchResult winner={result}>
              <PrimaryButton onClick={handlePlayAgain}>Play again</PrimaryButton>
            </MatchResult>
          )
        }
      </PlaysWrapper>
    </Container>
  );
}

export default withGame(Match);