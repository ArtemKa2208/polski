import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

type Props = {
  s: number,
  m: number,
  t: number,
  handleButton: () => void,
  getElapsedTime: (elapsedTime: number) => void,
};

export const Timer: React.FC<Props> = ({
  s,
  m,
  t,
  handleButton,
  getElapsedTime,
}) => {
  const [timer, setTimer] = useState(t);
  const [seconds, setSeconds] = useState(s);
  const [minutes, setMinutes] = useState(m);

  useEffect(() => {
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
      setSeconds(prevSeconds => prevSeconds - 1);
      if (seconds === 1) {
        setSeconds(59);
        setMinutes((prevMinutes) => prevMinutes - 1);
      }
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
      handleButton();
    }

    return () => {
      clearInterval(interval);
      getElapsedTime(t - timer);
    };
  }, [timer]);

  const getTime = () => {
    const min = (minutes < 10) ? `0${minutes}` : minutes;
    const sec = (seconds < 10) ? `0${seconds}` : seconds;

    return `${min}:${sec}`;
  };

  return (
    <Typography
      sx={{
        bgcolor: '#809dff',
        py: 0.5,
        px: 1,
        color: 'white',
        width: '50px',
        textAlign: 'center',
        borderRadius: '25px',
        position: 'sticky',
        top: '0px',
        left: '50%',
        transform: 'translate(-50%, 0)',
      }}
    >
      {getTime()}
    </Typography>
  );
};
