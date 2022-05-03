import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  IconButton,
  Modal, Typography,
} from '@mui/material';

type Props = {
  handleButton: () => void,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const ModalSendQuiz: React.FC<Props> = ({ handleButton }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="contained"
        sx={{
          ':hover': {
            bgcolor: '#18d7ff',
          },
          bgcolor: '#18d7ff',
          color: 'white',
          fontWeight: '700',
          fontSize: '17px',
        }}
        onClick={handleOpen}
      >
        Завершить тест
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              alignSelf: 'flex-end',
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
            }}
            alt="Info icon"
            src="./img/info.png"
          />
          <h2 id="parent-modal-title">Завершение теста</h2>
          <Typography
            id="parent-modal-description"
            sx={{
              textAlign: 'center',
            }}
          >
            Вы действительно завершили тест? Завершив тест вы больше не сможете изменить ответы
          </Typography>
          <Box
            sx={{
              width: '100%',
              mt: '20px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                width: '45%',
                bgcolor: '#e3e3e3',
                color: '#696969',
                ':hover': {
                  bgcolor: '#e3e3e3',
                },
              }}
            >
              Отмена
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleButton();
                handleClose();
              }}
              sx={{
                width: '45%',
                ':hover': {
                  bgcolor: '#18d7ff',
                },
                bgcolor: '#18d7ff',
              }}
            >
              Завершить тест
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
