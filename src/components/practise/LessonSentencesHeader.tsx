import React from 'react';
import {createUseStyles} from 'react-jss';
import {IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from '@/app/store';
import {
  setSentenceCreateDialogOpen
} from '@/features/dialogs/dialogsSlice';
import {useRouter} from 'next/router';

const LessonSentencesPageHeader = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleAddButtonClick = () => {
    dispatch(setSentenceCreateDialogOpen(true));
  };

  return (
    <div className={classes.container}>
      <IconButton size="large" onClick={handleAddButtonClick} sx={{
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.8)',
        }
      }}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 30,
    padding: '50px 0',
  },
});

export default LessonSentencesPageHeader;