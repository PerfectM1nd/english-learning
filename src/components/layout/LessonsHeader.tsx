import React from 'react';
import {createUseStyles} from 'react-jss';
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from '@/app/store';
import {
  setCreateLessonDialogOpen
} from '@/features/dialogs/dialogsSlice';

const LessonsHeader = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleAddButtonClick = () => {
    dispatch(setCreateLessonDialogOpen(true));
  };

  return (
    <div className={classes.container}>
      <div className={classes.addButtonContainer} onClick={handleAddButtonClick}>
        <AddIcon sx={{fontSize: 30, marginRight: '8px'}}/>
        <div className={classes.addButtonText}>
          ADD A TOPIC
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  addButtonText: {
    marginRight: 5
  },
  addButtonContainer: {
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255)',
    padding: '5px 15px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.7)'
    }
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 0',
  },
});

export default LessonsHeader;