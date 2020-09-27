import React from 'react';
import styled from 'styled-components';
import paperIcon from '../../assets/svgs/icon-paper.svg';
import rockIcon from '../../assets/svgs/icon-rock.svg';
import scissorsIcon from '../../assets/svgs/icon-scissors.svg';
import { EnumPlays } from '../../lib';

const RingWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.primaryTextColor};
  border-color: ${props => props.borderColor};
  border-style: solid;
  border-radius: 50%;
  border-width: ${props => props.borderWidth ? props.borderWidth + 'px' : '20px'};
  box-shadow: 0 ${props => props.innerShadow || '6px'} rgba(0, 0, 0, .2) inset;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  transform: transform 0.3s ease-in;
  transform-style: preserve-3d;
  width: 100%;

  &::after {
    border-radius: 50%;
    bottom: ${props => props.bottomShadow || '-1.6rem'};
    content: "";
    height: calc(100% + ${props => props.borderWidth * 2 + 'px'});
    position: absolute;
    transform: translateZ(-1px);
    width: calc(100% + ${props => props.borderWidth * 2 + 'px' });
  }
`;

export const BlueRingWrapper = styled(RingWrapper)`
  border-color: ${props => props.theme.blue100};

  &::after {
    background: rgba(88, 113, 247, .5);
  }
`;

export const YellowRingWrapper = styled(RingWrapper)`
  border-color: ${props => props.theme.yellow100};

  &::after {
    background: rgba(236, 167, 34, .5);
  }
`;

export const RedRingWrapper = styled(RingWrapper)`
  border-color: ${props => props.theme.red100};

  &::after {
    background: rgba(223, 64, 92, .5);
  }
`;

const withBasePlay = Comp => play => (props) => {
  const handleClick = (e) => {
    if (props.onClick) {
      props.onClick(play);
    }
  }
  return <Comp {...props} onClick={handleClick}/>
}

export default function Plays() { throw new Error('Use Plays.PlayName'); }

Plays.Paper = withBasePlay(
  (props) => <BlueRingWrapper {...props}><img src={paperIcon} alt="Paper"/></BlueRingWrapper>
)(EnumPlays.paper);

Plays.Scissors = withBasePlay(
  (props) => <YellowRingWrapper {...props}><img src={scissorsIcon} alt="Scissors"/></YellowRingWrapper>
)(EnumPlays.scissors);


Plays.Rock = withBasePlay(
  (props) => <RedRingWrapper {...props}><img src={rockIcon} alt="Rock"/></RedRingWrapper>
)(EnumPlays.rock);