import React, {FC, useEffect, useState} from 'react';
import {createUseStyles} from 'react-jss';
import {useAppSelector} from '@/app/store';
import LessonSentenceListComponent from '@/components/practise/LessonSentenceListComponent';
import {shuffleArray} from '@/utils/array';
import {LessonSentence} from '@prisma/client';

interface Props {
  lessonId: number
}

const LessonSentencesList: FC<Props> = ({lessonId}) => {
  const classes = useStyles();
  const lessonSentences = useAppSelector(state => state.practice.lessonSentences)[lessonId];
  const repetitionModeEnabled = useAppSelector(state => state.practice.repetitionModeEnabled);
  
  const [lessonSentencesArray, setLessonSentencesArray] = useState<LessonSentence[]>([]);

  useEffect(() => {
    if (repetitionModeEnabled) {
      const array = [...lessonSentences];
      shuffleArray(array);
      setLessonSentencesArray(array);
    } else {
      setLessonSentencesArray([...lessonSentences].reverse());
    }
  }, [repetitionModeEnabled]);

  return (
    <ul className={classes.container}>
      {lessonSentencesArray?.map(lessonSentence => (
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