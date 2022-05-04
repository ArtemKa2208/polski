import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  answers: Answer[],
  questions: Question[],
  time: number,
};

export const Results: React.FC<Props> = ({ answers, questions, time }) => {
  const [counterCorrectAnswers, setCounterCorrectAnswers] = useState(0);
  const [counterPoint, setCounterPoint] = useState(0);
  const [counterScore, setCounterScore] = useState(0);
  const minutes = Math.trunc(time / 60);
  const seconds = time - (minutes * 60);

  const counterAnswers = () => {
    questions.forEach((question) => {
      setCounterScore((prevState) => {
        return prevState + question.points;
      });

      const elem = answers.find(answer => answer.id === question.id);

      if (elem) {
        if (elem.answer === question.answer) {
          setCounterCorrectAnswers((prevState) => {
            return prevState + 1;
          });
          setCounterPoint((prevState) => {
            return prevState + question.points;
          });
        }
      }
    });
  };

  const getTime = () => {
    const min = (minutes < 10) ? `0${minutes}` : minutes;
    const sec = (seconds < 10) ? `0${seconds}` : seconds;

    return `${min}:${sec}`;
  };

  useEffect(() => {
    counterAnswers();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#ff8560',
        p: 4,
        gap: '20px',
        borderRadius: '20px',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          alignItem: 'center',
          color: 'white',
          fontWeight: '600',
          '@media (max-width: 500px)': {
            fontSize: '28px',
          },
        }}
      >
        Тест завершен
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          color: 'white',
          alignItems: 'center',
          '@media (max-width: 760px)': {
            flexDirection: 'column',
            gap: '10px',
          },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography>Баллов</Typography>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            {`${counterPoint} из ${counterScore}`}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '2px',
            bgcolor: 'white',
            height: '45px',
            '@media (max-width: 760px)': {
              // display: 'none',
              width: '70px',
              height: '2px',
            },
          }}
        >
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography>Прошел за</Typography>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            {getTime()}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '2px',
            bgcolor: 'white',
            height: '45px',
            '@media (max-width: 760px)': {
              // display: 'none',
              width: '70px',
              height: '2px',
            },
          }}
        >
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography>Правильно</Typography>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            {counterCorrectAnswers}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '2px',
            bgcolor: 'white',
            height: '45px',
            '@media (max-width: 760px)': {
              // display: 'none',
              width: '70px',
              height: '2px',
            },
          }}
        >
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography>Ошибок</Typography>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            {questions.length - counterCorrectAnswers}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '2px',
            bgcolor: 'white',
            height: '45px',
            '@media (max-width: 760px)': {
              // display: 'none',
              width: '70px',
              height: '2px',
            },
          }}
        >
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography>Не отвечено</Typography>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
            }}
          >
            {questions.length - answers.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
