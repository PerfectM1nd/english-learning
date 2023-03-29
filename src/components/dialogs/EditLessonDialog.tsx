import React, {useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setEditLessonDialogOpen} from '@/features/dialogs/dialogsSlice';
import {DialogTransition} from '@/components/dialogs/DialogTransition';
import {Dialog} from '@mui/material';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {Lesson} from '@prisma/client';
import {editLesson} from '@/features/practiсe/practiceThunks';
import TextInput from '@/components/form/TextInput';

const EditSentenceDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.editLessonDialogOpen);
  const editingLesson = useAppSelector(state => state.dialogs.editingLesson) as Lesson;

  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [sequenceNumber, setSequenceNumber] = useState('');

  useEffect(() => {
    editingLesson && setTitle(editingLesson.title);
    editingLesson && setLevel(editingLesson.level);
    editingLesson && setSequenceNumber(editingLesson.sequenceNumber.toString());
  }, [editingLesson]);

  const handleClose = () => {
    dispatch(setEditLessonDialogOpen(false));
  };

  const handleSentenceEdit = () => {
    dispatch(editLesson({
      id: editingLesson.id,
      title,
      level,
      sequenceNumber: +sequenceNumber
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
          <div className={classes.inputLabel}>
            Порядковый номер
          </div>
          <TextInput
            label=""
            setFunction={setSequenceNumber}
            value={sequenceNumber}
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

export default EditSentenceDialog;