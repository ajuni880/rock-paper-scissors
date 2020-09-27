import styled from 'styled-components';
import { typescale } from '../../utils';

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${typescale.small};
  outline: 0;
  min-width: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;


export const PrimaryButton = styled(Button)`
  background: ${props => props.theme.primaryTextColor};
  color: ${props => props.theme.primaryColor};
  padding: 12px 24px;
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.primaryTextColor};
  font-weight: 600;
  padding: 5px 24px;
  border: 1px solid ${props => props.theme.primaryTextColor};
`;

export const SecondaryButtonFixed = styled(SecondaryButton)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
`;