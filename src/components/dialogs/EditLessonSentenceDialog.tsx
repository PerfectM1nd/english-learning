import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Checkbox, Dialog, FormControlLabel, Typography} from '@mui/material';
import TextareaAutosize from 'react-textarea-autosize';
import SpeechRecognition from 'react-speech-recognition';
import {LessonSentence,LessonSentenceStatus} from '@prisma/client';

import {useAppDispatch, useAppSelector} from '$/store';
import {
  setEditLessonSentenceDialogOpen
} from '$/features/dialogs/dialogsSlice';
import {DialogTransition} from '$/components/dialogs/DialogTransition';
import {theme} from '$/app/theme';
import {editLessonSentence} from '$/features/practiсe/practiceThunks';
import PrimaryButton from '$/components/ui/PrimaryButton';

const EditLessonSentenceDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.editLessonSentenceDialogOpen);
  const editingLessonSentence = useAppSelector(state => state.dialogs.editingLessonSentence) as LessonSentence;

  const [englishText, setEnglishText] = useState('');
  const [russianText, setRussianText] = useState('');
  const [status, setStatus] = useState<LessonSentenceStatus | null>(null);
  const [commentary, setCommentary] = useState('');

  const handleClose = () => {
    dispatch(setEditLessonSentenceDialogOpen(false));
  };

  useEffect(() => {
    if (!editingLessonSentence) return;
    setEnglishText(editingLessonSentence.englishText);
    setRussianText(editingLessonSentence.russianText);
    setStatus(editingLessonSentence.status);
    setCommentary(editingLessonSentence.commentary);
  }, [editingLessonSentence]);

  const editSentence = () => {
    if (!status) {
      alert('Fill in the status');
      return;
    }
    dispatch(editLessonSentence({
      id: editingLessonSentence.id,
      lessonId: editingLessonSentence.lessonId,
      englishText,
      russianText,
      status,
      commentary
    }));
    setEnglishText('');
    setRussianText('');
    setCommentary('');
    setStatus(null);
    handleClose();
    SpeechRecognition.stopListening();
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
        <div className={classes.inputLabel}>Sentence in Russian</div>
        <TextareaAutosize
          onChange={(event) => setRussianText(event.target.value)}
          value={russianText}
          className={classes.input}
        />
        <div className={classes.inputLabel}>Sentence in English</div>
        <TextareaAutosize
          onChange={(event) => setEnglishText(event.target.value)}
          value={englishText}
          className={classes.input}
        />
        <div className={classes.inputLabel}>Commentary</div>
        <TextareaAutosize
          onChange={(event) => setCommentary(event.target.value)}
          value={commentary}
          className={classes.input}
        />
        <div className={classes.checkboxContainer}>
          <FormControlLabel
            control={
              <Checkbox
                color="success"
                checked={status === LessonSentenceStatus.fluent}
                onChange={(event) => setStatus(event.target.checked ? LessonSentenceStatus.fluent : null)}
              />
            }
            label={<Typography fontWeight={700} color="#61a821" sx={{userSelect: 'none'}}>Бегло</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={status === LessonSentenceStatus.uncertain}
                onChange={(event) => setStatus(event.target.checked ? LessonSentenceStatus.uncertain : null)}
              />
            }
            label={<Typography fontWeight={700} color="#ffcb14" sx={{userSelect: 'none'}}>Неуверенно</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="warning"
                checked={status === LessonSentenceStatus.mistaken}
                onChange={(event) => setStatus(event.target.checked ? LessonSentenceStatus.mistaken : null)}
              />
            }
            label={<Typography fontWeight={700} color={theme.palette.warning.main} sx={{userSelect: 'none'}}>С ошибкой</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                color="error"
                checked={status === LessonSentenceStatus.error}
                onChange={(event) => setStatus(event.target.checked ? LessonSentenceStatus.error : null)}
              />
            }
            label={<Typography fontWeight={700} color="error" sx={{userSelect: 'none'}}>Неправильно</Typography>}
          />
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton buttonText="СОХРАНИТЬ" onClick={editSentence} />
        </div>
      </div>
    </Dialog>
  );
};

const useStyles = createUseStyles({
  checkboxContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    padding: 10,
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: 3,
    width: '100%',
    boxSizing: 'border-box',
    fontSize: 18
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  inputLabel: {
    marginTop: 10,
    marginBottom: 10,
    color: 'white'
  },
  container: {
    backgroundColor: '#545454',
    padding: 30
  },
});

export default EditLessonSentenceDialog;