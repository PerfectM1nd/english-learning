import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {Dialog} from '@mui/material';
import {Lesson} from '@prisma/client';

import {useAppDispatch, useAppSelector} from '$/store';
import {setEditLessonDialogOpen} from '$/features/dialogs/dialogsSlice';
import {DialogTransition} from '$/components/dialogs/DialogTransition';
import PrimaryButton from '$/components/ui/PrimaryButton';
import {editLesson} from '$/features/practiсe/practiceThunks';
import TextInput from '$/components/form/TextInput';

const EditSentenceDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.editLessonDialogOpen);
  const editingLesson = useAppSelector(state => state.dialogs.editingLesson) as Lesson;

  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    editingLesson && setTitle(editingLesson.title);
    editingLesson && setLevel(editingLesson.level);
  }, [editingLesson]);

  const handleClose = () => {
    dispatch(setEditLessonDialogOpen(false));
  };

  const handleSentenceEdit = () => {
    dispatch(editLesson({
      id: editingLesson.id,
      title,
      level
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
            Название/Тема урока
          </div>
          <TextInput
            label=""
            setFunction={setTitle}
            value={title}
          />
          <div className={classes.inputLabel}>
            Уровень
          </div>
          <TextInput
            label=""
            setFunction={setLevel}
            value={level}
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