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

  const [wordText, setWordText] = useState('');
  
  useEffect(() => {
    editingSentence && setWordText(editingSentence.text);
  }, [editingSentence]);

  const handleClose = () => {
    dispatch(setSentenceEditDialogOpen(false));
  };

  const handleSentenceEdit = () => {
    dispatch(editSentence({
      id: editingSentence.id,
      text: wordText
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
            minRows={10}
            label=""
            setFunction={setWordText}
            value={wordText}
          />
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton buttonText="ИЗМЕНИТЬ" onClick={handleSentenceEdit}/>
        </div>
      </div>
    </Dialog>
  );
};

const useStyles = createUseStyles({
  buttonContainer: {
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