import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {LessonSentence} from '@prisma/client';
import {IconButton} from '@mui/material';
import {useAppDispatch} from '@/app/store';
import {DeleteForever} from '@mui/icons-material';
import {deleteLessonSentence} from '@/features/practiсe/practiceThunks';

interface Props {
  lessonSentence: LessonSentence
}

const LessonSentenceListComponent: FC<Props> = ({lessonSentence}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(deleteLessonSentence({lessonId: lessonSentence.lessonId, lessonSentenceId: lessonSentence.id}));
  };

  return (
    <div 
      className={classes.container} 
      style={{
        backgroundColor: lessonSentence.mistaken ? '#ffb4b4' : 'white'
      }}
    >
      <div className={classes.textContainer}>
        <div className={classes.russianText}>
          <span className={classes.flag}>🇷🇺</span>
          {lessonSentence.russianText}
        </div>
        <div className={classes.englishText}>
          <span className={classes.flag}>🇺🇸</span>
          {lessonSentence.englishText}
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <IconButton size="medium" onClick={handleDeleteButtonClick} sx={{
          backgroundColor: lessonSentence.mistaken ? '#ffb4b4' : 'white',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          }
        }}>
          <DeleteForever />
        </IconButton>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flag: {
    marginRight: 10,
    fontSize: 18
  },
  textContainer: {},
  russianText: {},
  englishText: {
    marginTop: 10
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
    borderRadius: 3,
    fontSize: 20,
    color: 'black',
    padding: 5,
    cursor: 'pointer',
    minHeight: 40,
    boxSizing: 'border-box',
    width: 800,
    marginBottom: 10
  }
});

export default LessonSentenceListComponent;