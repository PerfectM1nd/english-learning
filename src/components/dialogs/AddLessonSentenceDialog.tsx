import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setAddLessonSentenceDialogOpen, setSentenceCreateDialogOpen} from '@/features/dialogs/dialogsSlice';
import {DialogTransition} from '@/components/dialogs/DialogTransition';
import {Dialog} from '@mui/material';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {createNewSentence} from '@/features/sentences/sentencesThunks';
import MultilineInput from '@/components/form/MultilineInput';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

const AddLessonSentenceDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.addLessonSentenceDialogOpen);

  const [sentenceText, setSentenceText] = useState('');

  const handleClose = () => {
    dispatch(setAddLessonSentenceDialogOpen(false));
  };

  const handleWordAdd = () => {
    dispatch(createNewSentence(sentenceText));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={DialogTransition}
      maxWidth="md"
      fullWidth
    >
      <div className={classes.container}>
        <div className={classes.inputsContainer}>
          <div className={classes.inputLabel}>
            Новое предложение
          </div>
          <MultilineInput
            autoFocus
            minRows={10}
            label=""
            setFunction={setSentenceText}
            value={sentenceText}
          />
        </div>
        <div className={classes.buttonsContainer}>
          <div className={classes.buttonContainer}>
            <PrimaryButton buttonText="ДОБАВИТЬ" onClick={handleWordAdd}/>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const useStyles = createUseStyles({
  buttonContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  inputLabel: {
    marginTop: 20,
    marginBottom: 20
  },
  inputsContainer: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20
  },
  container: {
    backgroundColor: 'whitesmoke'
  }
});

export default AddLessonSentenceDialog;