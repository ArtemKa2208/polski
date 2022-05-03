import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { ModalSendQuiz } from '../ModalSendQuiz/ModalSendQuiz';
import { Results } from '../Results/Results';
import { Timer } from '../Timer/Timer';

type Props = {
  questionsFromServer: Question[],
  timer: number,
};

export const PageTest: React.FC<Props> = ({ questionsFromServer, timer }) => {
  const [questions, setQuestion] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setQuestion(questionsFromServer);
  }, []);

  const getValue = (id: number) => {
    const elem = answers.find(answer => answer.id === id);

    return elem?.answer || '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const copyAnswers = [...answers];
    const item = answers.findIndex(answer => answer.id === id);

    if (item !== -1) {
      copyAnswers[item].answer = event.target.value;
    } else {
      copyAnswers.push({
        id,
        answer: event.target.value,
      });
    }

    setAnswers(copyAnswers);
  };

  const handleButton = () => {
    setShowResult(true);
  };

  const getElapsedTime = (elapsedTime: number) => {
    setTime(elapsedTime);
  };

  const getCorrectAnswer = (userAnswer:string | undefined, correctAnswer:string, answer:string) => {
    if (answer === correctAnswer && answer !== userAnswer) {
      return (
        <Radio
          sx={{
            color: '#009b00',
          }}
        />
      );
    }

    if (answer === correctAnswer && answer === userAnswer) {
      return (
        <Radio
          color="success"
        />
      );
    }

    if (answer !== correctAnswer && answer === userAnswer) {
      return (
        <Radio
          color="error"
        />
      );
    }

    return (
      <Radio />
    );
  };

  return (
    <Container
      maxWidth="md"
    >
      <Box sx={{
        bgcolor: '#f8f8f8',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        p: 3,
        my: '15px',
        borderRadius: '25px',
        border: '1px solid #d9d8d8',
      }}
      >
        {
          !showResult && (
            <Timer
              s={timer - (Math.trunc(timer / 60) * 60)}
              m={Math.trunc(timer / 60)}
              t={timer}
              handleButton={handleButton}
              getElapsedTime={getElapsedTime}
            />
          )
        }
        {
          showResult && (<Results answers={answers} questions={questions} time={time} />)
        }
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            gap: '20px',
          }}
        >
          {
            (!showResult) ? (
              questions.map((question) => (
                <FormControl key={question.id}>
                  <FormLabel id="demo-radio-buttons-group-label">{question.question}</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={getValue(question.id)}
                    onChange={(e) => handleChange(e, question.id)}
                  >
                    {
                      question.options.map((option) => (
                        <FormControlLabel
                          key={option}
                          value={option}
                          control={(
                            <Radio color="warning" />
                          )}
                          label={option}
                        />
                      ))
                    }
                  </RadioGroup>
                </FormControl>
              ))
            ) : (
              questions.map((question) => {
                const userAnswer = answers.find(answer => answer.id === question.id);

                return (
                  <FormControl key={question.id}>
                    <FormLabel id="demo-radio-buttons-group-label">{question.question}</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      value={getValue(question.id)}
                    >
                      {
                        question.options.map((option) => (
                          <FormControlLabel
                            key={option}
                            value={option}
                            control={getCorrectAnswer(userAnswer?.answer, question.answer, option)}
                            label={option}
                          />
                        ))
                      }
                    </RadioGroup>
                  </FormControl>
                );
              })
            )
          }
        </Box>
        {
          !showResult && (<ModalSendQuiz handleButton={handleButton} />)
        }
      </Box>
    </Container>
  );
};
