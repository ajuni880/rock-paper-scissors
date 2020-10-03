import React from 'react';
import styled from 'styled-components';
import { typescale } from '../../utils';

const MatchResultWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: ${props => props.theme.mqs.mobile}) {
    position: fixed;
    top: 65vh;
  }
`;

const DisplayWinner = styled.h3`
  font-size: ${typescale.h3};
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export default ({ winner, children }) => {
  return (
    <MatchResultWrapper>
      <DisplayWinner>{winner}</DisplayWinner>
      {children}
    </MatchResultWrapper>
  );
}