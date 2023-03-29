import React, {FC, useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {LessonSentence} from '@prisma/client';
import {IconButton} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/app/store';
import {DeleteForever} from '@mui/icons-material';
import {deleteLessonSentence} from '@/features/practiсe/practiceThunks';
import EditIcon from '@mui/icons-material/Edit';
import {setEditingLessonSentence, setEditLessonSentenceDialogOpen} from '@/features/dialogs/dialogsSlice';

interface Props {
  lessonSentence: LessonSentence
}

const LessonSentenceListComponent: FC<Props> = ({lessonSentence}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const repetitionModeEnabled = useAppSelector(state => state.practice.repetitionModeEnabled);

  const [englishTextHidden, setEnglishTextHidden] = useState(false);

  const handleDeleteButtonClick = () => {
    dispatch(deleteLessonSentence({lessonId: lessonSentence.lessonId, lessonSentenceId: lessonSentence.id}));
  };

  const handleEditButtonClick = () => {
    dispatch(setEditLessonSentenceDialogOpen(true));
    dispatch(setEditingLessonSentence(lessonSentence));
  };

  const showEnglishText = () => {
    setEnglishTextHidden(false);
  };

  const playSound = () => {
    const msg = new SpeechSynthesisUtterance(lessonSentence.englishText);
    window.speechSynthesis.speak(msg);
  };
  
  const handleClick = () => {
    englishTextHidden ?
      showEnglishText() :
      playSound();
  };

  useEffect(() => {
    setEnglishTextHidden(repetitionModeEnabled);
  }, [repetitionModeEnabled]);
  
  const getBackgroundColor = () => {
    switch (lessonSentence.status) {
      case 'fluent': {
        return '#edffeb';
      }
      case 'uncertain': {
        return '#fff8d6';
      }
      case 'mistaken': {
        return '#ffd2af';
      }
      case 'error': {
        return '#ff9c9c';
      }
    }
  };

  return (
    <li
      onClick={handleClick}
      className={classes.container} 
      style={{
        backgroundColor: getBackgroundColor()
      }}
    >
      <div className={classes.textContainer}>
        <div className={classes.russianText}>
          <span className={classes.flag}>🇷🇺</span>
          {lessonSentence.russianText}
        </div>
        <div className={classes.englishText} style={{opacity: englishTextHidden ? 0 : 1}}>
          <span className={classes.flag}>🇺🇸</span>
          {lessonSentence.englishText}
        </div>
        {
          lessonSentence.commentary &&
            <div className={classes.commentaryText}>
              {lessonSentence.commentary}
            </div>
        }
      </div>
      <div className={classes.buttonContainer}>
        <IconButton size="medium" onClick={handleEditButtonClick} sx={{
          backgroundColor: getBackgroundColor(),
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          }
        }}>
          <EditIcon />
        </IconButton>
        <IconButton size="medium" onClick={handleDeleteButtonClick} sx={{
          backgroundColor: getBackgroundColor(),
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          }
        }}>
          <DeleteForever />
        </IconButton>
      </div>
    </li>
  );
};

const useStyles = createUseStyles({
  commentaryText: {
    fontSize: 13,
    color: 'gray',
    padding: '5px 0'
  },
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