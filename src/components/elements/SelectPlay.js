import React from 'react';
import styled from 'styled-components';
import { Container, Plays } from '../shared';
import { withGame } from '../../context/GameProvider';
import { setComputer, setPlayer, setScreen } from '../../hooks/useGame';
import { computerPlay } from '../../lib';

const OptionsWrapper = styled.div`
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;

  @media only screen and (max-width: ${props => props.theme.mqs.mobile}) {
    padding: 2rem 2rem;
  }

  div:nth-child(3) {
    margin-top: 1rem;
    div {
      position: relative;
      left: 7rem;
      @media only screen and (max-width: ${props => props.theme.mqs.mobile}) {
        left: 5rem;
      }
    }
  }
`;

const PlayWrapper = styled.div`
  width: 9rem;
  height: 9rem;
`;

const SelectPlay = ({ game }) => {
  const { updateState } = game;

  const handleClick = (play) => {
    const compPlay = computerPlay();
    updateState(setPlayer({ play }));
    updateState(setComputer({ play:  compPlay }))
    updateState(setScreen(2));
  }

  const props = {
    onClick: handleClick,
    borderWidth: 18,
  }

  return (
    <Container>
      <OptionsWrapper>
        <PlayWrapper>
          <Plays.Paper {...props} />
        </PlayWrapper>
        <PlayWrapper>
          <Plays.Scissors {...props} />
        </PlayWrapper>
        <PlayWrapper>
          <Plays.Rock {...props} />
        </PlayWrapper>
      </OptionsWrapper>
    </Container>
  );
}

export default withGame(SelectPlay);