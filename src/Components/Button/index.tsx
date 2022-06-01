import React from 'react';
import { ButtonContainer } from './styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  bgColor?: string;
  color?: string;
}

export function Button({ children, onClick, bgColor = 'transparent', color = '#000000' }: Props) {
  return (
    <ButtonContainer
      className="button-container"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color }}
    >
      {children}
    </ButtonContainer>
  );
}
