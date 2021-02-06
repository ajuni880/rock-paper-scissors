import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Plays, Container, PrimaryButton, MatchResult } from '../shared';
import { withGame } from '../../context/GameProvider';
import {
  EnumPlays,
  checkWinner,
  computeMathResult,
  EnumGameResultStates
} from '../../lib';
import { playAgain, updateScore } from '../../hooks/useGame';

const PlaysWrapper = styled.div`
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: 1fr 1fr;
  height: 19rem;
  padding: 2rem 0;
  position: relative;

  @media only screen and (max-width: ${(props) => props.theme.mqs.mobile}) {
    justify-content: center;
    height: 13rem;
    padding: 2rem 1rem;
  }

  img {
    width: 50%;
  }
`;

const PlayWithTranslate = styled.div`
  transition: transform 0.1s cubic-bezier(0.12, 0.61, 0.42, 0.61);
  transform: ${(props) =>
    props.translate ? `translateX(${props.translate})` : 'none'};

  @media only screen and (max-width: ${(props) => props.theme.mqs.mobile}) {
    transform: none !important;
    > div {
      border-width: 20px;
      &:after {
        bottom: -1.6rem;
        height: calc(100% + 40px);
        width: calc(100% + 40px);
      }
    }
  }
`;

function getSelectedPlay(p) {
  if (p.play === EnumPlays.paper) return Plays.Paper;
  else if (p.play === EnumPlays.scissors) return Plays.Scissors;
  else return Plays.Rock;
}

const Match = ({ game }) => {
  const {
    state: { player, computer },
    updateState
  } = game;
  const [matchResultVisible, setMatchResultVisible] = useState(false);
  const props = {
    borderWidth: 32,
    bottomShadow: '-2.6rem',
    innerShadow: '10px'
  };
  const PlayerPlay = getSelectedPlay(player);
  const ComputerPlay = getSelectedPlay(computer);
  const winner = checkWinner(player, computer);
  const result = computeMathResult(winner);

  const handlePlayAgain = () => {
    updateState(playAgain());
  };

  useEffect(() => {
    setMatchResultVisible(true);
    if (winner !== EnumGameResultStates.draw) updateState(updateScore(winner));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <PlaysWrapper>
        <PlayWithTranslate translate={matchResultVisible ? '-8rem' : ''}>
          <PlayerPlay {...props} />
        </PlayWithTranslate>
        <PlayWithTranslate translate={matchResultVisible ? '8rem' : ''}>
          <ComputerPlay {...props} />
        </PlayWithTranslate>

        {matchResultVisible && (
          <MatchResult winner={result}>
            <PrimaryButton onClick={handlePlayAgain}>Play again</PrimaryButton>
          </MatchResult>
        )}
      </PlaysWrapper>
    </Container>
  );
};

export default withGame(Match);
