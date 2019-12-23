import React from 'react';
import { Dial } from './Dial';
import { pitch } from 'sound-analyzer';

const calculateAngle = (frequency, closest) => {
  if (frequency > closest.frequency) {
    return 45 - 45 * (frequency - closest.frequency) / (closest.range.high - closest.frequency);
  } else {
    return 45 + 45 * (closest.frequency - frequency) / (closest.frequency - closest.range.low);
  }
}

export const TunerDial = ({ frequency }) => {
  const closest = pitch.getClosest(frequency);
  const angle = closest ? calculateAngle(frequency, closest) : null;

  return (
    <div className="tuner">
      <div>{closest ? closest.name : ''}</div>
      <Dial degree={angle} width={400} height={300} />
    </div>
  );
}