import React, {FC, useEffect} from 'react';
import {createUseStyles} from 'react-jss';

import {useAppDispatch, useAppSelector} from '$/store';
import LessonSentenceListComponent from '$/components/practise/lessonSentences/LessonSentenceListComponent';
import {shuffleLessonSentences} from '$/features/practiсe/practiceSlice';

interface Props {
  lessonId: number
}

const LessonSentencesList: FC<Props> = ({lessonId}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const lessonSentences = useAppSelector(state => state.practice.lessonSentences)[lessonId];
  const shuffledLessonSentences = useAppSelector(state => state.practice.shuffledLessonSentences)[lessonId];
  const repetitionModeEnabled = useAppSelector(state => state.practice.repetitionModeEnabled);

  useEffect(() => {
    if (repetitionModeEnabled) {
      dispatch(shuffleLessonSentences(lessonId));
    }
  }, [repetitionModeEnabled]);

  return (
    <ul className={classes.container}>
      {(repetitionModeEnabled ? shuffledLessonSentences : lessonSentences)?.map(lessonSentence => (
        <LessonSentenceListComponent key={lessonSentence.id} lessonSentence={lessonSentence} />
      ))}
    </ul>
  );
};

const useStyles = createUseStyles({
  container: {
    marginTop: 10
  }
});

export default LessonSentencesList;