import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setWordEditDialogOpen} from '@/features/dialogs/dialogsSlice';
import {DialogTransition} from '@/components/dialogs/DialogTransition';
import {Dialog} from '@mui/material';
import TextInput from '@/components/form/TextInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {editWord} from '@/features/words/wordsThunks';
import {Word} from '@prisma/client';

const EditWordDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.wordEditDialogOpen);
  const currentViewWord = useAppSelector(state => state.words.currentViewWord) as Word;

  const [wordText, setWordText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  
  useEffect(() => {
    if (!currentViewWord) return;
    setWordText(currentViewWord.text);
    setAudioUrl(currentViewWord.audioUrl);
  }, [currentViewWord]);

  const handleClose = () => {
    dispatch(setWordEditDialogOpen(false));
  };

  const handleWordAdd = () => {
    dispatch(editWord({
      id: currentViewWord.id,
      text: wordText,
      audioUrl
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
            Слово
          </div>
          <TextInput
            label=""
            setFunction={setWordText}
            value={wordText}
          />
          <div className={classes.inputLabel}>
            Ссылка на озвучку
          </div>
          <TextInput
            label=""
            setFunction={setAudioUrl}
            value={audioUrl}
          />
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton buttonText="ИЗМЕНИТЬ" onClick={handleWordAdd}/>
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

export default EditWordDialog;