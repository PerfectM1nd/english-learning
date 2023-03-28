import React from 'react';
import {createUseStyles} from 'react-jss';
import {useAppSelector} from '@/app/store';
import LessonListComponent from '@/components/practise/LessonListComponent';

const LessonsList = () => {
  const classes = useStyles();
  const lessons = useAppSelector(state => state.practice.lessons);

  return (
    <div className={classes.container}>
      {
        lessons.map(lesson => (<LessonListComponent key={lesson.id} lesson={lesson} />))
      }
    </div>
  );
};

const useStyles = createUseStyles({
  container: {}
});

export default LessonsList;