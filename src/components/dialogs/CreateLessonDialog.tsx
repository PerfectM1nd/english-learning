import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Dialog, MenuItem} from '@mui/material';
import {EnglishLevel} from '@prisma/client';

import {useAppDispatch, useAppSelector} from '$/store';
import {setCreateLessonDialogOpen} from '$/features/dialogs/dialogsSlice';
import {DialogTransition} from '$/components/dialogs/DialogTransition';
import TextInput from '$/components/form/TextInput';
import PrimaryButton from '$/components/ui/PrimaryButton';
import {createNewLesson} from '$/features/practiсe/practiceThunks';
import SelectInput from '$/components/form/SelectInput';

const CreateLessonDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.createLessonDialogOpen);

  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');

  const handleClose = () => {
    dispatch(setCreateLessonDialogOpen(false));
  };

  const handleWordAdd = () => {
    dispatch(createNewLesson({
      title,
      level
    }));
    handleClose();
  };

  const handleLevelChange = (value: string) => {
    value && setLevel(value);
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
            Название видео / Тема урока / Тема грамматики
          </div>
          <TextInput
            label=""
            setFunction={setTitle}
            value={title}
          />
          <div className={classes.inputLabel}>
            Уровень
          </div>
          <div className={classes.selectInput}>
            <SelectInput
              setFunction={handleLevelChange}
              value={level}
              required
              label=""
            >
              {
                Object.values(EnglishLevel).map(el => (
                  <MenuItem key={el} value={el}>{el}</MenuItem>
                ))
              }
            </SelectInput>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <PrimaryButton buttonText="ДОБАВИТЬ" onClick={handleWordAdd}/>
        </div>
      </div>
    </Dialog>
  );
};

const useStyles = createUseStyles({
  selectInput: {
    width: 100
  },
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

export default CreateLessonDialog;