import React, {FC} from 'react';
import {createUseStyles} from 'react-jss';
import {Lesson} from '@prisma/client';
import {IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {
  setEditingLesson,
  setEditLessonDialogOpen
} from '@/features/dialogs/dialogsSlice';
import {useAppDispatch} from '@/app/store';
import TouchableOpacity from '@/components/ui/TouchableOpacity';
import {useRouter} from 'next/router';

interface Props {
  lesson: Lesson
}

const LessonListComponent: FC<Props> = ({lesson}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleEditButtonClick = () => {
    dispatch(setEditingLesson(lesson));
    dispatch(setEditLessonDialogOpen(true));
  };

  return (
    <div className={classes.container}>
      <TouchableOpacity onClick={() => router.push('/practice/' + lesson.id)} className={classes.titleContainer}>
        <span className={classes.levelText}>{lesson.level}</span> {lesson.title}
      </TouchableOpacity>
      <div className={classes.buttonContainer}>
        <IconButton size="medium" onClick={handleEditButtonClick} sx={{
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.8)',
          }
        }}>
          <EditIcon />
        </IconButton>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  titleContainer: {
    flex: 1,
    minHeight: 40,
    display: 'flex',
    alignItems: 'center'
  },
  levelText: {
    color: 'blue',
    marginRight: 10
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 20,
    color: 'black',
    padding: '0 5px',
    cursor: 'pointer',
    marginRight: 10,
    minHeight: 40,
    boxSizing: 'border-box',
    width: 600
  }
});

export default LessonListComponent;