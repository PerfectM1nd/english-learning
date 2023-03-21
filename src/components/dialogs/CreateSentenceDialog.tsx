import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setSentenceCreateDialogOpen} from '@/features/dialogs/dialogsSlice';
import {DialogTransition} from '@/components/dialogs/DialogTransition';
import {Dialog} from '@mui/material';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {createNewSentence} from '@/features/sentences/sentencesThunks';
import MultilineInput from '@/components/form/MultilineInput';

const CreateSentenceDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.sentenceCreateDialogOpen);

  const [sentenceText, setSentenceText] = useState('');

  const handleClose = () => {
    dispatch(setSentenceCreateDialogOpen(false));
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
            minRows={10}
            label=""
            setFunction={setSentenceText}
            value={sentenceText}
          />
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton buttonText="ДОБАВИТЬ" onClick={handleWordAdd}/>
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

export default CreateSentenceDialog;