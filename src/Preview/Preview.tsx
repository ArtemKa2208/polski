import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import { ModalStart } from '../ModalStart/ModalStart';

type Props = {
  numberOfQuestions: number,
  time: number,
};

export const Preview: React.FC<Props> = ({ numberOfQuestions, time }) => {
  const getTime = () => {
    const minutes = Math.trunc(time / 60);
    const seconds = time - (minutes * 60);

    return `${minutes} мин ${seconds} с`;
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: '20px',
        bgcolor: '#f8f8f8',
        p: 2,
        borderRadius: '25px',
        border: '1px solid #d9d8d8',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          mb: '20px',
        }}
      >
        Test
      </Typography>
      <Box
        sx={{
          backgroundColor: '#ff8560',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: '20px',
          gap: '15px',
          p: 5,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 90,
            width: 85,
            opacity: '0.9',
          }}
          alt="Watch"
          src="./img/watch.png"
        />
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: '#ffffff',
            fontWeight: '500',
            '@media (max-width: 460px)': {
              fontSize: '30px',
            },
          }}
        >
          Тест на время
        </Typography>
        <Box sx={{
          display: 'flex',
          gap: '10px',
          color: '#fff',
          alignItems: 'center',
          width: '80%',
          justifyContent: 'space-around',
          '@media (max-width: 700px)': {
            flexDirection: 'column',
          },
        }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '220px',
          }}
          >
            <Typography variant="h6">Кол-во вопросов</Typography>
            <Typography variant="h4">{numberOfQuestions}</Typography>
          </Box>
          <Box
            sx={{
              width: '3px',
              bgcolor: 'white',
              height: '50px',
              '@media (max-width: 700px)': {
                display: 'none',
              },
            }}
          >
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '220px',
          }}
          >
            <Typography variant="h6">Время на выполнение</Typography>
            <Typography variant="h4">{getTime()}</Typography>
          </Box>
        </Box>
        <ModalStart />
      </Box>
    </Container>
  );
};
