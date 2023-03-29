import React from 'react';
import {createUseStyles} from 'react-jss';
import LessonSentencesRepetitionButton from '@/components/practise/lessonSentences/LessonSentencesRepetitionButton';
import LessonSentenceGuideButton from '@/components/practise/lessonSentences/LessonSentenceGuideButton';

const LessonSentencesHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <LessonSentencesRepetitionButton />
      <LessonSentenceGuideButton />
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center'
  }
});

export default LessonSentencesHeader;