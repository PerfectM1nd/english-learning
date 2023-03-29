import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setSentenceEditDialogOpen} from '@/features/dialogs/dialogsSlice';
import {DialogTransition} from '@/components/dialogs/DialogTransition';
import {Dialog} from '@mui/material';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {Sentence} from '@prisma/client';
import {editSentence} from '@/features/sentences/sentencesThunks';
import MultilineInput from '@/components/form/MultilineInput';

const EditSentenceDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.sentenceEditDialogOpen);
  const editingSentence = useAppSelector(state => state.dialogs.editingSentence) as Sentence;

  const [sentenceText, setSentenceText] = useState('');
  
  useEffect(() => {
    editingSentence && setSentenceText(editingSentence.text);
  }, [editingSentence]);

  const handleClose = () => {
    dispatch(setSentenceEditDialogOpen(false));
  };

  const handleSentenceEdit = () => {
    dispatch(editSentence({
      id: editingSentence.id,
      text: sentenceText
    }));
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
            Предложение
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
          <PrimaryButton buttonText="СОХРАНИТЬ" onClick={handleSentenceEdit}/>
        </div>
      </div>
    </Dialog>
  );
};

const useStyles = createUseStyles({
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

export default EditSentenceDialog;