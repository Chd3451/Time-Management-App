import React from 'react';
import TimeDisplay from '../../atoms/time-display';
import TimerContainer from '../../molecules/timer-container';

export default function Timer({ time }) {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <TimerContainer>
      <TimeDisplay formattedTime={formattedTime} />
    </TimerContainer>
  );
}
