import React from 'react';
import styled from 'styled-components';
import { typescale } from '../../utils';
import { CloseIcon } from '../../icons';
import rules from '../../assets/svgs/image-rules.svg';

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, 0.4);
`;

const ModalWrapperInner = styled.div`
  background: ${props => props.theme.rulesModalColor};
  border-radius: 8px;
  padding: 1rem 2rem;
  position: relative;
  max-width: 400px;
  width: 100%;
  z-index: 2;
`;

const ModalContent = styled.div`
  margin: 2rem 0 1rem 1rem;
`;

const Title = styled.h4`
  color: ${props => props.theme.primaryColor};
  font-size: ${typescale.h4};
  line-height: 1.4;
  margin: 0;
  text-transform: uppercase;
`;

const CloseIconWrapper = styled.div`
  height: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 1.3rem;
  width: 1.5rem;
`;


export default ({ open, onCloseModal }) => (
  open ? <ModalWrapper className={`${open ? 'is-open' : ''}`}>
    <ModalWrapperInner>
      <CloseIconWrapper>
        <CloseIcon onClick={onCloseModal}/>
      </CloseIconWrapper>
      <Title>Rules</Title>
      <ModalContent>
        <img src={rules} alt="Rules"/>
      </ModalContent>
    </ModalWrapperInner>
  </ModalWrapper> : null
);