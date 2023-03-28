import React, {useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {setCreateLessonDialogOpen} from '@/features/dialogs/dialogsSlice';
import {DialogTransition} from '@/components/dialogs/DialogTransition';
import {Dialog} from '@mui/material';
import TextInput from '@/components/form/TextInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {createNewLesson} from '@/features/practiсe/practiceThunks';

const CreateLessonDialog = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const open = useAppSelector(state => state.dialogs.createLessonDialogOpen);

  const [title, setTitle] = useState('');
  const [level, setLevel] = useState('');
  const [sequenceNumber, setSequenceNumber] = useState('');

  const handleClose = () => {
    dispatch(setCreateLessonDialogOpen(false));
  };

  const handleWordAdd = () => {
    dispatch(createNewLesson({
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

export default CreateLessonDialog;