import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {Sentence} from '@prisma/client';
import EditIcon from '@mui/icons-material/Edit';
import {IconButton} from '@mui/material';

import {
  setEditingSentence,
  setSentenceEditDialogOpen
} from '$/features/dialogs/dialogsSlice';
import {useAppDispatch} from '$/store';
import TouchableOpacity from '$/components/ui/TouchableOpacity';

interface Props {
  sentence: Sentence
}

const SentenceComponent: FC<Props> = ({sentence}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const playSound = () => {
    const msg = new SpeechSynthesisUtterance(sentence.text);
    window.speechSynthesis.speak(msg);
  };

  const handleEditButtonClick = () => {
    dispatch(setEditingSentence(sentence));
    dispatch(setSentenceEditDialogOpen(true));
  };

  return (
    <div className={classes.container}>
      <TouchableOpacity className={classes.sentence} onClick={playSound}>
        {sentence.text}
      </TouchableOpacity>
      <div className={classes.buttonContainer}>
        <IconButton size="medium" onClick={handleEditButtonClick} sx={{
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          }
        }}>
          <EditIcon />
        </IconButton>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    marginBottom: 10
  },
  sentence: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 20,
    color: 'black',
    padding: 5,
    cursor: 'pointer',
    marginRight: 10,
    minHeight: 40,
    boxSizing: 'border-box'
  }
});

export default SentenceComponent;