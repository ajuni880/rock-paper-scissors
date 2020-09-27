import React from 'react';
import styled from 'styled-components';
import { typescale } from '../../utils';

const Header = styled.header`
  border: 2px solid ${props => props.theme.primaryTextColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  max-width: 600px;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: ${typescale.h2};
  line-height: 1;
  max-width: fit-content;
  margin: 0;
`

export default ({ children }) => (
  <Header>
    <TitleWrapper>
      <span>ROCK</span>
      <span>PAPER</span>
      <span>SCISSORS</span>
    </TitleWrapper>
    {children}
  </Header>
);