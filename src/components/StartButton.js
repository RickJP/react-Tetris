import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ cb }) => (
  <StyledStartButton onClick={cb}>Start Game</StyledStartButton>
)

export default StartButton;