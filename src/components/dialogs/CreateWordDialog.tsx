import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Dialog} from '@mui/material';

import {useAppDispatch, useAppSelector} from '$/store';
import {setWordCreateDialogOpen} from '$/features/dialogs/dialogsSlice';
import {DialogTransition} from '$/components/dialogs/DialogTransition';
import TextInput from '$/components/form/TextInput';
import PrimaryButton from '$/components/ui/PrimaryButton';
import {createNewWord} from '$/features/words/wordsThunks';

const CreateWordDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.wordCreateDialogOpen);

  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleClose = () => {
    dispatch(setWordCreateDialogOpen(false));
  };

  const handleWordAdd = () => {
    dispatch(createNewWord({
      text,
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
            Новое слово
          </div>
          <TextInput
            label=""
            setFunction={setText}
            value={text}
          />
          <div className={classes.inputLabel}>
            Ссылка на аудио mp3 (например с сайта <a target="_blank" rel="noopener noreferrer" href="https://dictionary.cambridge.org">https://dictionary.cambridge.org</a>).
            <br/>Если оставить пустым, будет машинная озвучка
          </div>
          <TextInput
            label=""
            setFunction={setAudioUrl}
            value={audioUrl}
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

export default CreateWordDialog;